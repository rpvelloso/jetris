#!/usr/bin/env python3
"""Regenerate jetris bitmap assets (pieces, board background, splash) to match
the dark neon theme, then patch the base64 constants inside ../game.js.

Cell geometry must stay 20x20 px per block (cell centers fully opaque: the
line-collapse logic samples them via getImageData), board 204x404.
"""
import base64
import re
from pathlib import Path

from PIL import Image, ImageDraw

HERE = Path(__file__).parent
CELL = 20

# ---------------------------------------------------------------- tiles ----

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def shade(c, t):
    """t<0 darken toward black, t>0 lighten toward white."""
    return lerp((0, 0, 0), c, 1 + t) if t < 0 else lerp(c, (255, 255, 255), t)


def draw_block(d, x0, y0, color):
    """One glossy 20px block: gradient body, top-left bevel, dark seam."""
    inset = 1
    x1, y1 = x0 + CELL - inset, y0 + CELL - inset
    body = color
    light, dark = shade(color, 0.45), shade(color, -0.45)
    # vertical gradient body
    h = y1 - y0
    for i in range(h):
        d.line([(x0 + inset, y0 + inset + i), (x1, y0 + inset + i)],
               fill=lerp(light, dark, i / max(h - 1, 1)))
    # bevels
    d.line([(x0 + inset, y0 + inset), (x1, y0 + inset)], fill=shade(color, 0.75))
    d.line([(x0 + inset, y0 + inset), (x0 + inset, y1)], fill=shade(color, 0.35))
    d.line([(x0 + inset, y1), (x1, y1)], fill=shade(color, -0.6))
    d.line([(x1, y0 + inset), (x1, y1)], fill=shade(color, -0.35))
    # faint diagonal gloss
    for k in range(2):
        d.line([(x0 + 3 + k, y0 + 3), (x0 + 3, y0 + 3 + k * 3)],
               fill=shade(color, 0.6))


def make_piece(shape, color):
    rows, cols = len(shape), max(len(r) for r in shape)
    img = Image.new('RGBA', (cols * CELL, rows * CELL), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for r, line in enumerate(shape):
        for c, ch in enumerate(line):
            if ch == '#':
                draw_block(d, c * CELL, r * CELL, color)
    return img


# same order/geometry as the originals: 2x2, 2x2l, 2x2r, 3x1c, 3x1l, 3x1r, 4x1
PIECES = [
    ('2x2.png', ["##", "##"], (250, 204, 21)),      # O yellow
    ('2x2l.png', ["#.", "##", ".#"], (34, 197, 94)),   # S green
    ('2x2r.png', [".#", "##", "#."], (239, 68, 68)),   # Z red
    ('3x1c.png', ["###", ".#."], (168, 85, 247)),   # T purple
    ('3x1l.png', ["#.", "#.", "##"], (59, 130, 246)),   # J blue
    ('3x1r.png', [".#", ".#", "##"], (249, 115, 22)),   # L orange
    ('4x1.png', ["####"], (34, 211, 238)),         # I cyan
]

NEON = (34, 211, 238)
MAGENTA = (232, 121, 249)

# ------------------------------------------------------------ board -------

def make_board():
    # NOTE: the board doubles as the per-frame clear layer, so every pixel
    # must stay fully opaque; "glow" effects are baked into the base color.
    img = Image.new('RGBA', (204, 404), (7, 10, 18, 255))
    d = ImageDraw.Draw(img)
    # playfield panel
    base = (10, 14, 26)
    d.rectangle([1, 1, 202, 402], fill=base + (255,))
    # spawn-zone glow: opaque cyan tint fading down over the first rows
    for y in range(5):
        tint = lerp(base, (16, 60, 78), 1 - y / 5)
        d.rectangle([2, 2 + y * CELL, 202, 2 + (y + 1) * CELL - 1],
                    fill=tint + (255,))
    # subtle grid lines
    for x in range(0, 11):
        fx = 2 + x * CELL
        col = (48, 60, 96, 255) if x in (0, 10) else (24, 31, 53, 255)
        d.line([(fx, 2), (fx, 402)], fill=col)
    for y in range(0, 21):
        fy = 2 + y * CELL
        col = (48, 60, 96, 255) if y in (0, 20) else (24, 31, 53, 255)
        d.line([(2, fy), (202, fy)], fill=col)
    # neon frame (solid colors only — board must stay 100% opaque)
    side = lerp(base, NEON, 0.45)
    bottom = lerp(base, NEON, 0.6)
    d.line([(0, 0), (203, 0)], fill=NEON + (255,))
    d.line([(0, 1), (0, 403)], fill=side + (255,))
    d.line([(203, 1), (203, 403)], fill=side + (255,))
    d.line([(0, 403), (203, 403)], fill=bottom + (255,))
    return img

# ----------------------------------------------------------- splash -------

GLYPHS = {
    'J': ["..#", "..#", "..#", "#.#", "###"],
    'E': ["###", "#..", "###", "#..", "###"],
    'T': ["###", ".#.", ".#.", ".#.", ".#."],
    'R': ["##.", "#.#", "##.", "#.#", "#.#"],
    'I': ["###", ".#.", ".#.", ".#.", "###"],
    'S': ["###", "#..", ".##", "..#", "###"],
}


def make_splash():
    img = make_board()
    d = ImageDraw.Draw(img)
    # JETRIS as 3x5 glyphs, 2 letters x 3 rows:
    #   block width  = 3 + 2 gap + 3 = 8 cols -> margins 1..1 (board has 10)
    #   block height = 3*5 + 2 gaps  = 17 rows -> margins 2..1 (board has 20)
    grid = [("J", 2, 1), ("E", 2, 6),
            ("T", 8, 1), ("R", 8, 6),
            ("I", 14, 1), ("S", 14, 6)]
    # one classic piece color per letter (blue up top so it pops on the
    # cyan-tinted spawn zone; cyan letter sits lower over the dark board)
    colors = [
        (59, 130, 246),   # J blue
        (250, 204, 21),   # E yellow
        (34, 197, 94),    # T green
        (249, 115, 22),   # R orange
        (34, 211, 238),   # I cyan
        (168, 85, 247),   # S purple
    ]
    for (letter, row, col), color in zip(grid, colors):
        glyph = GLYPHS[letter]
        for r, line in enumerate(glyph):
            for c, ch in enumerate(line):
                if ch == '#':
                    draw_block(d, 2 + (col + c) * CELL, 2 + (row + r) * CELL, color)
    return img


# ------------------------------------------------------------- patch ------

def b64(img):
    import io
    buf = io.BytesIO()
    img.save(buf, 'PNG', optimize=True)
    return base64.b64encode(buf.getvalue()).decode()


def main():
    for fname, shape, color in PIECES:
        make_piece(shape, color).save(HERE / fname)
    board = make_board()
    board.save(HERE / 'bg10x20.png')
    splash = make_splash()
    splash.save(HERE / 'splash.png')

    game_py = (HERE.parent / 'game.js').read_text()

    urls = [f'"data:image/png;base64, {b64(make_piece(s, c))}"'
            for _, s, c in PIECES]
    new_array = 'const piecesFiles = [\n    ' + ',\n    '.join(urls) + '\n];'
    game_py = re.sub(r'const piecesFiles = \[.*?\];', new_array, game_py, flags=re.S)

    bg_url = f'data:image/png;base64, {b64(board)}'
    game_py = re.sub(r'const bgImage = createImage\("[^"]*"\);',
                     f'const bgImage = createImage("{bg_url}");', game_py)

    sp_url = f'data:image/png;base64, {b64(splash)}'
    game_py = re.sub(r'splash\.src = "[^"]*";',
                     f'splash.src = "{sp_url}";', game_py)

    (HERE.parent / 'game.js').write_text(game_py)
    print('patched game.js')


if __name__ == '__main__':
    main()