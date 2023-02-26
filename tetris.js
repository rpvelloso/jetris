const piecesFiles = [
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDwIKSfsGTgAAAHVJREFUaN7t18EJgEAMBMA9uWptQmzCdvVjCTkI3GwBYfIIZEeSN7UZlcNmklxnzbD7SXmONA8gICAgICAgIODewNH95V8BLM2STlI5z5EAAgICAgICAgJu10n6Fpw/pQvPFVvrJICAgICAgICAgFt1ktYv/wcTzA51BwPEbAAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAF5JREFUWIXt10ENwDAMwEB3GpbxxzMyKwh3Uh4+AJGVV7KAj8FuAJ5Dje/i9LzrzKT/FGgVaBVoFWgVaBVoFWgVaC2Gn/zjN9hPYhVoFWgVaBVoFWgVaBVoFWiN/0k2lhoLTxdZH2AAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIlJREFUaIHt17ENwDAMxEAp8LQZKOs6VSbgC3AA3gAPFi6srrydHFvJsc++Mzv9VF2ZqTkGUgZSBlIGUgZSBlIGUgZSPbAZ/fJ3ejBtVWVviPTe8W/QQMpAykDKQMpAykDKQMpA6h9f/rDoITZykyQd/wYNpAykDKQMpAykDKQMpAykJm6S6Jf/BRMUDXl+ihFFAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAAABHNCSVQICAgIfAhkiAAAAHFJREFUaIHt2MENgDAMBMEzSn0US4PkRQdGgvVOASc2Eh9XkjuDrCS5mprPVL6+d7Qs/YjBdAbTGUxnMJ3BdAbTGUxnMF1l2ImnXtjsfsDWb1ydY4/um1ancf+wwXQG0xlMZzCdwXQG0xlMZzDduBPPBrBODE9u80nHAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIZDjQMKEZYOQAAAGhJREFUaN7t14EJwDAIBMC3dJjuP023SZawIM39AHIIgl9JVnpTncPuJFlvk+xJe64MDyAgICAgICAg4NnAmv7yj9+gTgIICAgICAgICAj4607yBXB+J+mc50gAAQEBAQEBAQGP6ySt2U9JDXgpccqRAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAAABHNCSVQICAgIfAhkiAAAAIRJREFUaIHt18EJwCAQBVE3pBH7Lyql6CFgA/OFPcwr4DOEHNwaeSs59ibHjjUzO/WNJ7N0j4GUgZSBlIGUgZSBlIGUgVRd2Iw++dt/QW8SykDKQMpAykDKQMpAykDKQKr9TVLpwbT/JgneEOm99v+ggZSBlIGUgZSBlIGUgZSBVPsn/wb+Xw116jOk4gAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAABHNCSVQICAgIfAhkiAAAAFNJREFUWIXt2KEVACAMxNArj/1XBsMEpK75pu5EZCvJib7tpK9gvTtpbzVtjWVAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBU8aWPXM2zBifNv7EtAAAAAElFTkSuQmCC",
];
const bgImage = createImage("data:image/png;base64, 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");
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

class TetrisGame {
    static rows = 20;
    static cols = 10;
    static startInterval = 600;
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
    
    constructor(canvas, rect_size, images, bgImage, key_presses, loopCallback) {
        this.ctx = canvas.getContext("2d");
        this.offScreenCanvas = new OffscreenCanvas(bgImage.width, bgImage.height).getContext("2d");
        this.piecesImages = images;
        this.bgImage = bgImage;
        this.delta = rect_size;
        this.degreesIndex = 0;
        this.currentPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.nextPieceIndex = Math.trunc(Math.random() * this.piecesImages.length);
        this.width = rect_size*TetrisGame.cols;
        this.height = rect_size*TetrisGame.rows;
        this.xOffset = (bgImage.width % rect_size) / 2;
        this.yOffset = (bgImage.height % rect_size) / 2;
        this.x = this.delta*4;
        this.y = 0;
        this.score = 0;
        this.rowCount = 0;
        this.gravityInterval = TetrisGame.startInterval;
        this.level = 1;
        this.key_presses = key_presses;
        this.loopCallback = loopCallback;
    }

    get rotation() {return TetrisGame.degrees[this.degreesIndex] * Math.PI / 180.0;}
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
        this.score += TetrisGame.scores[lines];
        this.rowCount += lines;
        this.level = 1 + Math.trunc(this.rowCount/10);
        this.gravityInterval = TetrisGame.startInterval - (this.level -1)*10;
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
            this.y = next_y;
            return true;
        }
        return false;
    }

    rotate() {
        let curr_degree = this.degreesIndex;
        this.degreesIndex = (this.degreesIndex + 1)%4;
        let moveResult = this.validateMove(this.x, this.y);
        let next_x, next_y;
        switch (moveResult) {
            case TetrisGame.MoveStatus.COLLISION:
                this.degreesIndex = curr_degree;
                break;
            case TetrisGame.MoveStatus.INVALID_LEFT:
                next_x = 0;
                if (this.validateMove(next_x, this.y) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case TetrisGame.MoveStatus.INVALID_RIGHT:
                next_x = this.width - this.pieceWidth;
                if (this.validateMove(next_x, this.y) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case TetrisGame.MoveStatus.INVALID_BOTTOM:
                next_y = this.height - this.pieceHeight;
                if (this.validateMove(this.x, next_y) != 0) {
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
        const key_events = {
            "up": this.rotate.bind(this),
            "down": this.moveDown.bind(this),
            "left": this.moveLeft.bind(this),
            "right": this.moveRight.bind(this)
        }
        while (this.key_presses.length > 0) {
            key_events[this.key_presses.shift()]();
        }
        this.loopCallback(this);

        this.ctx.drawImage(this.bgImage, 0, 0);
        this.ctx.drawImage(this.offScreenCanvas.canvas, 0, 0);
        this.ctx.save();
        this.ctx.translate((this.pieceWidth/2) + this.X, (this.pieceHeight/2) + this.Y);
        this.ctx.rotate(this.rotation);
        const p = this.piece;
        this.ctx.drawImage(p, -(p.width/2), -(p.height/2));
        this.ctx.restore();
    }

    gravity() {
        clearInterval(this.gravityIntervalHandler);
    
        if (!this.moveDown()) {
            if (this.y == 0) {
                clearInterval(this.refreshIntervalHandler);
                clearInterval(this.gravityIntervalHandler);
                window.alert('Game Over');
                return;
            }
            this.nextPiece();
        }
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
    }

    run() {
        this.refreshIntervalHandler = setInterval(this.gameLoop.bind(this), TetrisGame.refreshInterval);
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
    }
}

game = new TetrisGame(
    document.getElementById("tetris"), 
    rect.width, 
    piecesImages,
    bgImage,
    key_presses,
    (game) => {
        document.getElementById("score").value = game.score;
        document.getElementById("lines").value = game.rowCount;
        document.getElementById("level").value = game.level;
        document.getElementById("next").src = piecesFiles[game.nextPieceIndex];
    }
);

game.run();
