// TODO enum validateMove return
const piecesFiles = [
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDwIKSfsGTgAAAHVJREFUaN7t18EJgEAMBMA9uWptQmzCdvVjCTkI3GwBYfIIZEeSN7UZlcNmklxnzbD7SXmONA8gICAgICAgIODewNH95V8BLM2STlI5z5EAAgICAgICAgJu10n6Fpw/pQvPFVvrJICAgICAgICAgFt1ktYv/wcTzA51BwPEbAAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAF5JREFUWIXt10ENwDAMwEB3GpbxxzMyKwh3Uh4+AJGVV7KAj8FuAJ5Dje/i9LzrzKT/FGgVaBVoFWgVaBVoFWgVaC2Gn/zjN9hPYhVoFWgVaBVoFWgVaBVoFWiN/0k2lhoLTxdZH2AAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIlJREFUaIHt17ENwDAMxEAp8LQZKOs6VSbgC3AA3gAPFi6srrydHFvJsc++Mzv9VF2ZqTkGUgZSBlIGUgZSBlIGUgZSPbAZ/fJ3ejBtVWVviPTe8W/QQMpAykDKQMpAykDKQMpA6h9f/rDoITZykyQd/wYNpAykDKQMpAykDKQMpAykJm6S6Jf/BRMUDXl+ihFFAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAABHNCSVQICAgIfAhkiAAAAHFJREFUaIHt2MENgDAMBMEzSn0US4PkRQdGgvVOASc2Eh9XkjuDrCS5mprPVL6+d7Qs/YjBdAbTGUxnMJ3BdAbTGUxnMF1l2ImnXtjsfsDWb1ydY4/um1ancf+wwXQG0xlMZzCdwXQG0xlMZzDduBPPBrBODE9u80nHAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDjQMKEZYOQAAAGhJREFUaN7t14EJwDAIBMC3dJjuP023SZawIM39AHIIgl9JVnpTncPuJFlvk+xJe64MDyAgICAgICAg4NnAmv7yj9+gTgIICAgICAgICAj4607yBXB+J+mc50gAAQEBAQEBAQGP6ySt2U9JDXgpccqRAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIRJREFUaIHt18EJwCAQBVE3pBH7Lyql6CFgA/OFPcwr4DOEHNwaeSs59ibHjjUzO/WNJ7N0j4GUgZSBlIGUgZSBlIGUgVRd2Iw++dt/QW8SykDKQMpAykDKQMpAykDKQKr9TVLpwbT/JgneEOm99v+ggZSBlIGUgZSBlIGUgZSBVPsn/wb+Xw116jOk4gAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAABHNCSVQICAgIfAhkiAAAAFNJREFUWIXt2KEVACAMxNArj/1XBsMEpK75pu5EZCvJib7tpK9gvTtpbzVtjWVAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBU8aWPXM2zBifNv7EtAAAAAElFTkSuQmCC",
];
const bg_image = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMwAAAGUCAYAAAB5iM3cAAAABHNCSVQICAgIfAhkiAAABEhJREFUeJzt00ENwCAAwECGcfROBbNAX2TJnYJ++ux37QEcmbcD4E8MA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIDAMBIaBwDAQGAYCw0BgGAgMA4FhIPgA5VwGjubUVFoAAAAASUVORK5CYII=");
const rect = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAADFJREFUOI3t1bERADAMwkCR8/4r4yKNB6BEA3wrASbYANgZUxIvIp0KFixYsOBPhBewHpsFJ5d59QUAAAAASUVORK5CYII=");
                                
function createImage(src) {
    img = new Image();
    img.src = src;
    return img;
}

const keys = {
    38: "up", // key up
    40: "down", // key down
    37: "left", // key left
    39: "right", // key right
    87: "up", // w
    83: "down", // s
    65: "left", // a
    68: "right", // d
};

const key_events = {
    "up": (game) => {
        curr_degree = game.degreesIndex;
        game.degreesIndex = (game.degreesIndex + 1)%4;
        moveResult = game.validateMove(game.x, game.y);
        switch (moveResult) {
            case -4: // collision
                game.degreesIndex = curr_degree;
                break;
            case -1: // left side out of screen
                next_x = 0;
                if (game.validateMove(next_x, game.y) != 0) {
                    game.degreesIndex = curr_degree;
                } else {
                    game.x = next_x;
                }
                break;
            case -2: // right side out of screen
                next_x = game.width - game.pieceWidth;
                if (game.validateMove(next_x, game.y) != 0) {
                    game.degreesIndex = curr_degree;
                } else {
                    game.x = next_x;
                }
                break;
            case -3: // bottom out of screen
                next_y = game.height - game.pieceHeight;
                if (game.validateMove(game.x, next_y) != 0) {
                    game.degreesIndex = curr_degree;
                } else {
                    game.y = next_y;
                }
                break;
            default:
                break;
        }
    },
    "down": (game) => {
        next_y = game.y + game.delta;
        if (game.validateMove(game.x, next_y) == 0) {
            game.y = next_y;
            return true;
        } else {
            return false;
        }
    },
    "left": (game) => {
        next_x = game.x - game.delta;
        if (game.validateMove(next_x, game.y) == 0) {
            game.x = next_x;
        }
    },
    "right": (game) => {
        next_x = game.x + game.delta;
        if (game.validateMove(next_x, game.y) == 0) {
            game.x = next_x;
        }
    },
}

let key_presses = [];
window.onload = function () {
    document.getElementById("body").addEventListener("keydown", (e) => {
        if (keys[e.keyCode]) {
            key_presses.push(keys[e.keyCode]);
        }
    });
}

let piecesImages = [];
piecesFiles.forEach((src) => {
    piecesImages.push(createImage(src));
});

class Game {
    static rows = 20;
    static cols = 10;
    static startInterval = 600;
    static refreshInterval = 100;

    constructor(canvasName, width, height, rect_size, images) {
        this.ctx = document.getElementById(canvasName).getContext("2d");
        this.offScreenCanvas = new OffscreenCanvas(width, height).getContext("2d");
        this.piecesImages = images;
        this.delta = rect_size;
        this.degreesIndex = 0;
        this.currentPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.nextPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.width = rect_size*Game.cols;
        this.height = rect_size*Game.rows;
        this.xOffset = (width % rect_size) / 2;
        this.yOffset = (height % rect_size) / 2;
        this.x = this.delta*4;
        this.y = 0;
        this.score = 0;
        this.rowCount = 0;
        this.interval = Game.startInterval;
        this.level = 1;
    }

    static degrees = [0, 90, 180, -90];
    get rotation() {return Game.degrees[this.degreesIndex] * Math.PI / 180.0;}
    get X() {return this.x + this.xOffset;}
    get Y() {return this.y + this.yOffset;}
    get piece() {return this.piecesImages[this.currentPieceIndex];}
    get pieceWidth() {return [this.piece.width, this.piece.height][this.degreesIndex%2];}
    get pieceHeight() {return [this.piece.height, this.piece.width][this.degreesIndex%2];}

    get pieceBitmap() {
        const p = this.piece;
        const w = this.pieceWidth;
        const h = this.pieceHeight;
        const tmp_canvas = new OffscreenCanvas(w, h);
        const tmp_ctx = tmp_canvas.getContext("2d");
        tmp_ctx.translate(w/2, h/2);
        tmp_ctx.rotate(this.rotation);
        tmp_ctx.drawImage(p, -(p.width/2), -(p.height/2));
        return tmp_ctx.getImageData(0, 0, w, h);
    }

    nextPiece() {
        const p = this.piece;
        this.offScreenCanvas.save();
        this.offScreenCanvas.translate((this.pieceWidth/2) + this.X, (this.pieceHeight/2) + this.Y);
        this.offScreenCanvas.rotate(this.rotation);
        this.offScreenCanvas.drawImage(p, -(p.width/2), -(p.height/2));
        this.offScreenCanvas.restore();
        this.collapseCompleteLines();
        this.currentPieceIndex = this.nextPieceIndex;
        this.nextPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.x = this.delta*4;
        this.y = 0;
        this.degrees = 0;
    }

    static scores = [0, 50, 100, 200, 400];
    collapseCompleteLines() {
        let lines = 0;
        let off = this.offScreenCanvas.getImageData(
            this.xOffset, this.yOffset, 
            this.width, this.height);
        let rowLength = off.width * 4 * this.delta;
        for (let i = 0; i < Game.rows; ++i) {
            let collapse = true;
            for (let j = 0; j < Game.cols; ++j) {
                if (off.data[(rowLength*i) + (j*this.delta*4) + 3 + (rowLength/2) + (this.delta*2)] == 0) {
                    collapse = false;
                    break;
                }
            }
            if (collapse) {
                ++lines;
                this.offScreenCanvas.putImageData(
                    this.offScreenCanvas.getImageData(this.xOffset, this.yOffset, this.width, this.delta * i),
                    this.xOffset, this.delta + this.yOffset)
                this.offScreenCanvas.clearRect(this.xOffset, this.yOffset, this.width, this.delta);
            }
        }
        this.score += Game.scores[lines];
        this.rowCount += lines;
        this.level = 1 + Math.trunc(this.rowCount/10);
        this.interval = Game.startInterval - (this.level -1)*10;
    }

    validateMove(xx, yy) {
        const w = this.pieceWidth;
        const h = this.pieceHeight;
        if (xx < 0) {
            return -1;
        }
        if (xx + w > this.width) {
            return -2;
        }
        if (yy + h > this.height) {
            return -3;
        }
        const pieceBmp = this.pieceBitmap;
        const off = this.offScreenCanvas.getImageData(xx+this.xOffset, yy+this.yOffset, w, h);

        const rows = h/this.delta;
        const cols = w/this.delta;
        const rowLength = w*4*this.delta;

        for (let r = 0; r < rows; ++r) {
            for (let c = 0; c < cols; ++c) {
                const pos = (r*rowLength) + c*this.delta*4 + 3 + (rowLength/2) + (this.delta*2);
                if (
                    (pieceBmp.data[pos] > 75) &&
                    (off.data[pos] != 0)
                ) {
                    return -4;
                }
            }
        }
        return 0;
    }
}

game = new Game(
    "tetris", 
    bg_image.width, bg_image.height, 
    rect.width, 
    piecesImages);

function statsUpdate() {
    document.getElementById("score").value = game.score;
    document.getElementById("lines").value = game.rowCount;
    document.getElementById("level").value = game.level;
    document.getElementById("next").src = piecesFiles[game.nextPieceIndex];
}
    
function gameLoop() {
    while (key_presses.length > 0) {
        k = key_presses.shift();
        key_events[k](game);
    }
    statsUpdate();
    game.ctx.drawImage(bg_image, 0, 0);
    game.ctx.drawImage(game.offScreenCanvas.canvas, 0, 0);
    game.ctx.save();
    game.ctx.translate((game.pieceWidth/2) + game.X, (game.pieceHeight/2) + game.Y);
    game.ctx.rotate(game.rotation);
    const p = game.piece;
    game.ctx.drawImage(p, -(p.width/2), -(p.height/2));
    game.ctx.restore();
}

let gravity = function() {
    clearInterval(interval);

    if (!key_events["down"](game)) {
        if (game.y == 0) {
            clearInterval(refreshInterval);
            clearInterval(interval);
            window.alert('Game Over');
            return;
        }
        game.nextPiece();
    }
    interval = setInterval(gravity, game.interval);
}

let interval = setInterval(gravity, game.interval);
let refreshInterval = setInterval(gameLoop, Game.refreshInterval);
