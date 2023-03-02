const piecesFiles = [
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDwIKSfsGTgAAAHVJREFUaN7t18EJgEAMBMA9uWptQmzCdvVjCTkI3GwBYfIIZEeSN7UZlcNmklxnzbD7SXmONA8gICAgICAgIODewNH95V8BLM2STlI5z5EAAgICAgICAgJu10n6Fpw/pQvPFVvrJICAgICAgICAgFt1ktYv/wcTzA51BwPEbAAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAF5JREFUWIXt10ENwDAMwEB3GpbxxzMyKwh3Uh4+AJGVV7KAj8FuAJ5Dje/i9LzrzKT/FGgVaBVoFWgVaBVoFWgVaC2Gn/zjN9hPYhVoFWgVaBVoFWgVaBVoFWiN/0k2lhoLTxdZH2AAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIlJREFUaIHt17ENwDAMxEAp8LQZKOs6VSbgC3AA3gAPFi6srrydHFvJsc++Mzv9VF2ZqTkGUgZSBlIGUgZSBlIGUgZSPbAZ/fJ3ejBtVWVviPTe8W/QQMpAykDKQMpAykDKQMpA6h9f/rDoITZykyQd/wYNpAykDKQMpAykDKQMpAykJm6S6Jf/BRMUDXl+ihFFAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAABHNCSVQICAgIfAhkiAAAAHFJREFUaIHt2MENgDAMBMEzSn0US4PkRQdGgvVOASc2Eh9XkjuDrCS5mprPVL6+d7Qs/YjBdAbTGUxnMJ3BdAbTGUxnMF1l2ImnXtjsfsDWb1ydY4/um1ancf+wwXQG0xlMZzCdwXQG0xlMZzDduBPPBrBODE9u80nHAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDjQMKEZYOQAAAGhJREFUaN7t14EJwDAIBMC3dJjuP023SZawIM39AHIIgl9JVnpTncPuJFlvk+xJe64MDyAgICAgICAg4NnAmv7yj9+gTgIICAgICAgICAj4607yBXB+J+mc50gAAQEBAQEBAQGP6ySt2U9JDXgpccqRAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIRJREFUaIHt18EJwCAQBVE3pBH7Lyql6CFgA/OFPcwr4DOEHNwaeSs59ibHjjUzO/WNJ7N0j4GUgZSBlIGUgZSBlIGUgVRd2Iw++dt/QW8SykDKQMpAykDKQMpAykDKQKr9TVLpwbT/JgneEOm99v+ggZSBlIGUgZSBlIGUgZSBVPsn/wb+Xw116jOk4gAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAABHNCSVQICAgIfAhkiAAAAFNJREFUWIXt2KEVACAMxNArj/1XBsMEpK75pu5EZCvJib7tpK9gvTtpbzVtjWVAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBU8aWPXM2zBifNv7EtAAAAAElFTkSuQmCC",
];

const soundFiles = [
    'sounds/land.mp3',
    'sounds/line.mp3',
    'sounds/tetris.mp3',
    'sounds/game_over.mp3',
    'sounds/move.mp3'
];

function createImage(src) {
    img = new Image();
    img.src = src;
    return img;
}

const sounds = soundFiles.map((s) => new Audio(s));
const bgImage = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMwAAAGUCAYAAAB5iM3cAAAABHNCSVQICAgIfAhkiAAABStJREFUeJzt3LtNxFAURdEHopYpcqpxCy5mkmkGIhAEiLevkPhorcjRkZMtObl+OI7jeQFbHn/6BeAveXp9uN/vP/ke8KtdLpe11rtg1lrrdrt9y/h5nut6vdqz92/2juNYa/kkg0QwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgeDDxeV5nt86bs/ef9pba62H17/GuOmHz7npt2cv7LnphwHBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgI3/fbsBW76YYObfnv2wp6bfhgQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCBw02/PXuCmHza46bdnL+y56YcBwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCN/327AVu+mGDm3579sKem34YEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgcNNvz17gph82uOm3Zy/suemHAcFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAjf99uwFbvphg5t+e/bCnpt+GBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIHDTb89e4KYfNrjpt2cv7LnphwHBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgI3/fbsBW76YYObfnv2wp6bfhgQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCBw02/PXuCmHza46bdnL+y56YcBwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCN/327AVu+mGDm3579sKem34YEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgcNNvz17gph82uOm3Zy/suemHAcFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAjf99uwFbvphg5t+e/bCnpt+GBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIHDTb89e4KYfNrjpt2cv7LnphwHBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgI3/fbsBW76YYObfnv2wp6bfhgQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCBw02/PXuCmHza46bdnL+y56YcBwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCN/327AVu+mGDm3579sKem34YEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgcNNvz17gph82uOm3Zy/suemHAcFAIBgIBAOBYCAQDASCgUAwEAgGAsFAIBgIBAOBYCAQDASCgUAwEAgGAjf99uwFbvphg5t+e/bCnpt+GBAMBIKBQDAQCAYCwUAgGAgEA4FgIBAMBIKBQDAQCAYCwUAgGAgEA4FgIHDTb89e4KYfNrjpt2cv7LnphwHBQCAYCAQDgWAgEAwEgoFAMBAIBgLBQCAYCAQDgWAgEAwEgoFAMBAIBgI3/fbsBW83/cDXfJJB8AIr+9PLM9tGAQAAAABJRU5ErkJggg==");
const rect = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAADFJREFUOI3t1bERADAMwkCR8/4r4yKNB6BEA3wrASbYANgZUxIvIp0KFixYsOBPhBewHpsFJ5d59QUAAAAASUVORK5CYII=");
const piecesImages = piecesFiles.map((src) => createImage(src));

class TetrisKeyboardInput {
    static keys = {
        38: "up", // key up
        40: "down", // key down
        37: "left", // key left
        39: "right", // key right
        87: "up", // w
        83: "down", // s
        65: "left", // a
        68: "right", // d
        32: "land",
    };

    constructor(game) {
        document.getElementById("body").addEventListener("keydown", (e) => {
            if (TetrisKeyboardInput.keys[e.keyCode]) {
                game.inputQueue.push(TetrisKeyboardInput.keys[e.keyCode]);
            }
        });
    }
}

class TetrisTouchInput {
    static movingDelta = 25;
    constructor(game) {
        game.ctx.canvas.addEventListener("touchstart", (e) => {
            if (e.touches.length == 1) {
                this.startPoint = e.touches[0];
                this.currentPoint = e.touches[0];
                this.moving = false;
            }
        });        
        game.ctx.canvas.addEventListener("touchmove", (e) => {
            if (e.touches.length == 1) {
                this.currentPoint = e.touches[0];
                if (this.currentPoint.pageX > this.startPoint.pageX + TetrisTouchInput.movingDelta) {
                    game.inputQueue.push("right");
                    this.startPoint = this.currentPoint;
                } else if (this.currentPoint.pageX < this.startPoint.pageX - TetrisTouchInput.movingDelta) {
                    game.inputQueue.push("left");
                    this.startPoint = this.currentPoint;
                } else  if (this.currentPoint.pageY > this.startPoint.pageY + TetrisTouchInput.movingDelta) {
                    game.inputQueue.push("down");
                    this.startPoint = this.currentPoint;
                }
                this.moving = true;
            }
        });        
        game.ctx.canvas.addEventListener("touchend", (e) => {
            if (!this.moving) {
                game.inputQueue.push("up");
            }
        });        
    }
}
class TetrisGame {
    static rows = 20;
    static cols = 10;
    static startInterval = 500;
    static refreshInterval = 100;
    static degrees = [0, 90, 180, -90];
    static scores = [0, 50, 100, 200, 400];

    static MoveStatus = {
        SUCCESS: 0,
        COLLISION: -4,
        INVALID_LEFT: -1,
        INVALID_RIGHT: -2,
        INVALID_BOTTOM: -3
    };

    static Sounds = {
        LAND: 0,
        LINE: 1,
        TETRIS: 2,
        GAME_OVER: 3,
        MOVE: 4
    };

    constructor(canvas, rect_size, images, bgImage, sounds, speedIncrease, loopCallback) {
        this.ctx = canvas.getContext("2d");
        this.offScreenCanvas = new OffscreenCanvas(bgImage.width, bgImage.height).getContext("2d");
        this.piecesImages = images;
        this.bgImage = bgImage;
        this.delta = rect_size;
        this.degreesIndex = 0;
        this.pieceCount = new Array(images.length).fill(0);
        this.comboRowCount = [0, 0, 0, 0, 0];
        this.currentPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.pieceCount[this.currentPieceIndex] += 1;
        this.nextPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.width = rect_size * TetrisGame.cols;
        this.height = rect_size * TetrisGame.rows;
        this.xOffset = (bgImage.width % rect_size) / 2;
        this.yOffset = (bgImage.height % rect_size) / 2;
        this.x = this.delta * 4;
        this.y = 0;
        this.score = 0;
        this.rowCount = 0;
        this.gravityInterval = TetrisGame.startInterval;
        this.level = 1;
        this.speedIncrease = speedIncrease;
        this.loopCallback = loopCallback;
        this.pause = () => {};
        this.inputQueue = [];
        this.keyboardInput = new TetrisKeyboardInput(this);
        this.touchInput = new TetrisTouchInput(this);
        this.sounds = sounds;
    }

    get rotation() { return TetrisGame.degrees[this.degreesIndex] * Math.PI / 180.0; }
    get X() { return this.x + this.xOffset; }
    get Y() { return this.y + this.yOffset; }
    get piece() { return this.piecesImages[this.currentPieceIndex]; }
    get pieceWidth() { return [this.piece.width, this.piece.height][this.degreesIndex % 2]; }
    get pieceHeight() { return [this.piece.height, this.piece.width][this.degreesIndex % 2]; }

    get pieceBitmap() {
        const p = this.piece;
        const w = this.pieceWidth;
        const h = this.pieceHeight;
        const tmp_canvas = new OffscreenCanvas(w, h);
        const tmp_ctx = tmp_canvas.getContext("2d");
        tmp_ctx.translate(w / 2, h / 2);
        tmp_ctx.rotate(this.rotation);
        tmp_ctx.drawImage(p, -(p.width / 2), -(p.height / 2));
        return tmp_ctx.getImageData(0, 0, w, h);
    }

    nextPiece() {
        const p = this.piece;
        this.offScreenCanvas.save();
        this.offScreenCanvas.translate((this.pieceWidth / 2) + this.X, (this.pieceHeight / 2) + this.Y);
        this.offScreenCanvas.rotate(this.rotation);
        this.offScreenCanvas.drawImage(p, -(p.width / 2), -(p.height / 2));
        this.offScreenCanvas.restore();
        this.collapseCompleteLines();
        this.currentPieceIndex = this.nextPieceIndex;
        this.pieceCount[this.currentPieceIndex] += 1;
        this.nextPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.x = this.delta * 4;
        this.y = 0;
        this.degreesIndex = 0;
    }

    collapseCompleteLines() {
        let lines = 0;
        let off = this.offScreenCanvas.getImageData(
            this.xOffset, this.yOffset,
            this.width, this.height);
        let rowLength = off.width * 4 * this.delta;
        for (let i = 0; i < TetrisGame.rows; ++i) {
            let collapse = true;
            for (let j = 0; j < TetrisGame.cols; ++j) {
                if (off.data[(rowLength * i) + (j * this.delta * 4) + 3 + (rowLength / 2) + (this.delta * 2)] == 0) {
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
        if (lines == 4) {
            this.sounds[TetrisGame.Sounds.TETRIS].play();
        } else if (lines > 0) {
            this.sounds[TetrisGame.Sounds.LINE].play();
        }
        this.score += TetrisGame.scores[lines];
        this.rowCount += lines;
        this.comboRowCount[lines] += 1;
        this.level = 1 + Math.trunc(this.rowCount / 10);
        this.gravityInterval = TetrisGame.startInterval - (this.level - 1) * this.speedIncrease;
    }

    validateMove(xx, yy) {
        const w = this.pieceWidth;
        const h = this.pieceHeight;
        if (xx < 0) {
            return TetrisGame.MoveStatus.INVALID_LEFT;
        }
        if (xx + w > this.width) {
            return TetrisGame.MoveStatus.INVALID_RIGHT;
        }
        if (yy + h > this.height) {
            return TetrisGame.MoveStatus.INVALID_BOTTOM;
        }
        const pieceBmp = this.pieceBitmap;
        const off = this.offScreenCanvas.getImageData(xx + this.xOffset, yy + this.yOffset, w, h);

        const rows = h / this.delta;
        const cols = w / this.delta;
        const rowLength = w * 4 * this.delta;

        for (let r = 0; r < rows; ++r) {
            for (let c = 0; c < cols; ++c) {
                const pos = (r * rowLength) + c * this.delta * 4 + 3 + (rowLength / 2) + (this.delta * 2);
                if (
                    (pieceBmp.data[pos] > 75) &&
                    (off.data[pos] != 0)
                ) {
                    return TetrisGame.MoveStatus.COLLISION;
                }
            }
        }
        return TetrisGame.MoveStatus.SUCCESS;
    }

    moveLeft() {
        let next_x = this.x - this.delta;
        if (this.validateMove(next_x, this.y) == TetrisGame.MoveStatus.SUCCESS) {
            this.x = next_x;
        }
    }

    moveRight() {
        let next_x = this.x + this.delta;
        if (this.validateMove(next_x, this.y) == TetrisGame.MoveStatus.SUCCESS) {
            this.x = next_x;
        }
    }

    moveDown() {
        let next_y = this.y + this.delta;
        if (this.validateMove(this.x, next_y) == TetrisGame.MoveStatus.SUCCESS) {
            this.y += this.delta;
            return true;
        }
        return false;
    }

    land() {
        this.inputQueue.length = 0;
        while (this.moveDown());
    }

    rotate() {
        let curr_degree = this.degreesIndex;
        this.degreesIndex = (this.degreesIndex + 1) % 4;
        let moveResult = this.validateMove(this.x, this.y);
        let next_x, next_y;
        switch (moveResult) {
            case TetrisGame.MoveStatus.COLLISION:
                this.degreesIndex = curr_degree;
                break;
            case TetrisGame.MoveStatus.INVALID_LEFT:
                next_x = 0;
                if ((moveResult = this.validateMove(next_x, this.y)) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case TetrisGame.MoveStatus.INVALID_RIGHT:
                next_x = this.width - this.pieceWidth;
                if ((moveResult = this.validateMove(next_x, this.y)) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case TetrisGame.MoveStatus.INVALID_BOTTOM:
                next_y = this.height - this.pieceHeight;
                if ((moveResult = this.validateMove(this.x, next_y)) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.y = next_y;
                }
                break;
            default: // TetrisGame.MoveStatus.SUCCESS
                break;
        }
    }

    gameLoop() {
        const inputEvents = {
            "up": this.rotate.bind(this),
            "down": this.moveDown.bind(this),
            "left": this.moveLeft.bind(this),
            "right": this.moveRight.bind(this),
            "land": this.land.bind(this),
        }
        let lastInput = null;
        while (this.inputQueue.length > 0) {
            const currentInput = this.inputQueue.shift();
            if (currentInput != lastInput)
                this.sounds[TetrisGame.Sounds.MOVE].cloneNode().play();
            lastInput = currentInput;
            inputEvents[currentInput]();
        }
        this.loopCallback(this);

        this.ctx.drawImage(this.bgImage, 0, 0);
        this.ctx.drawImage(this.offScreenCanvas.canvas, 0, 0);
        this.ctx.save();
        this.ctx.translate((this.pieceWidth / 2) + this.X, (this.pieceHeight / 2) + this.Y);
        this.ctx.rotate(this.rotation);
        const p = this.piece;
        this.ctx.drawImage(p, -(p.width / 2), -(p.height / 2));
        this.ctx.restore();
    }

    gravity() {
        clearInterval(this.gravityIntervalHandler);

        if (!this.moveDown()) {
            if (this.y == 0) {
                this.stop();
                this.sounds[TetrisGame.Sounds.GAME_OVER].play();
                window.alert('Game Over');
                return;
            }
            this.sounds[TetrisGame.Sounds.LAND].play();
            this.nextPiece();
        }
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
    }

    run() {
        this.inputQueue.length = 0;
        this.refreshIntervalHandler = setInterval(this.gameLoop.bind(this), TetrisGame.refreshInterval);
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
        this.pause = this.stop.bind(this);
    }

    stop() {
        if (this.refreshIntervalHandler)
            clearInterval(this.refreshIntervalHandler);

        if (this.gravityIntervalHandler)
            clearInterval(this.gravityIntervalHandler);
        this.pause = this.run.bind(this);
        this.ctx.drawImage(this.bgImage, 0, 0);
    }
}

let statsHTML = "";
for (let i = 0; i < piecesFiles.length; ++i) {
    statsHTML = statsHTML +
        `<img style="position:absolute; top:${150 + i * 25}px; left:210px;" width="30" height="20" src="` + piecesImages[i].src +
        `"><input style="border:none; position:absolute; top:${150 + i * 25}px; left:250px;" size=6 disabled=disabled type=text id="piece` + i + '">';
}
statsHTML = statsHTML + `<input style="border:none; position:absolute; top:${150 + piecesFiles.length * 25}px; left:250px;" size=6 disabled=disabled type=text id="count">`;

const values = ['', 'I', 'II', 'III', 'IV'];
for (let i = 1; i < 5; ++i) {
    statsHTML = statsHTML +
        `<input disabled=disabled value=${values[i]} style="position:absolute; border:none; top:${150 + (i+piecesFiles.length) * 25}px; left:210px;" size="1"/><input style="border:none; position:absolute; top:${150 + (i+piecesFiles.length) * 25}px; left:250px;" size=6 disabled=disabled type=text id="score` + i + '">';
}

document.getElementById("stats").innerHTML = statsHTML;

let game;
function resetGame() {
    if (game)
        game.stop();

    game = new TetrisGame(
        document.getElementById("tetris"),
        rect.width,
        piecesImages,
        bgImage,
        sounds,
        25, 
        (game) => {
            document.getElementById("score").value = game.score;
            document.getElementById("lines").value = game.rowCount;
            document.getElementById("level").value = game.level;
            document.getElementById("next").src = piecesFiles[game.nextPieceIndex];
            for (let i = 1; i < 5; ++i) {
                document.getElementById("score" + i).value = game.comboRowCount[i];
            }
            const totalPieces = game.pieceCount.reduce((a, b) => a + b, 0);
            document.getElementById("count").value = '#' + totalPieces;
            if (totalPieces > 0) {
                for (let i = 0; i < game.pieceCount.length; ++i) {
                    document.getElementById("piece" + i).value = (100 * (game.pieceCount[i] / totalPieces)).toFixed(2) + '%';
                }
            }
        }
    );

    game.run();
}
