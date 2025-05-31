class JetrisKeyboardInput {
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
            if (JetrisKeyboardInput.keys[e.keyCode]) {
                game.inputQueue.push(JetrisKeyboardInput.keys[e.keyCode]);
            }
        });
    }
}

class JetrisTouchInput {
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
                if (this.currentPoint.pageX > this.startPoint.pageX + JetrisTouchInput.movingDelta) {
                    game.inputQueue.push("right");
                    this.startPoint = this.currentPoint;
                } else if (this.currentPoint.pageX < this.startPoint.pageX - JetrisTouchInput.movingDelta) {
                    game.inputQueue.push("left");
                    this.startPoint = this.currentPoint;
                } else  if (this.currentPoint.pageY > this.startPoint.pageY + JetrisTouchInput.movingDelta) {
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
export class JetrisGame {
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
        MOVE: 4,
        PAUSE: 5,
        START: 6
    };

    constructor(canvas, rect_size, images, bgImage, sounds, muted, speedIncrease, loopCallback) {
        this.ctx = canvas.getContext("2d");
        this.offScreenCanvas = new OffscreenCanvas(bgImage.width, bgImage.height).getContext("2d");
        this.piecesImages = images;
        this.bgImage = bgImage;
        this.delta = rect_size;
        this.degreesIndex = 0;
        this.pieceCount = new Array(images.length).fill(0);
        this.comboRowCount = [0, 0, 0, 0, 0];
        this.currentPieceIndex = this.randomPiece();
        this.pieceCount[this.currentPieceIndex] += 1;
        this.nextPieceIndex = this.randomPiece();
        this.width = rect_size * JetrisGame.cols;
        this.height = rect_size * JetrisGame.rows;
        this.xOffset = (bgImage.width % rect_size) / 2;
        this.yOffset = (bgImage.height % rect_size) / 2;
        this.x = this.delta * 4;
        this.y = 0;
        this.score = 0;
        this.rowCount = 0;
        this.gravityInterval = JetrisGame.startInterval;
        this.level = 1;
        this.speedIncrease = speedIncrease;
        this.loopCallback = loopCallback;
        this.pause = () => { return false; };
        this.inputQueue = [];
        this.keyboardInput = new JetrisKeyboardInput(this);
        this.touchInput = new JetrisTouchInput(this);
        this.muted = muted;
        this.sounds = sounds;
    }

    randomPiece() {
        return Math.floor(Math.random() * this.piecesImages.length);
    }

    playSound(soundId, bg) {
        if (!this.muted) {
            if (!bg)
                this.sounds[soundId].play();
            else
                this.sounds[soundId].cloneNode().play();
        }
    }

    get rotation() { return JetrisGame.degrees[this.degreesIndex] * Math.PI / 180.0; }
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
        this.nextPieceIndex = this.randomPiece();
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
        for (let i = 0; i < JetrisGame.rows; ++i) {
            let collapse = true;
            for (let j = 0; j < JetrisGame.cols; ++j) {
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
            this.playSound(JetrisGame.Sounds.TETRIS);
        } else if (lines > 0) {
            this.playSound(JetrisGame.Sounds.LINE);
        }
        this.score += JetrisGame.scores[lines];
        this.rowCount += lines;
        this.comboRowCount[lines] += 1;
        this.level = 1 + Math.trunc(this.rowCount / 10);
        this.gravityInterval = JetrisGame.startInterval - (this.level - 1) * this.speedIncrease;
    }

    validateMove(xx, yy) {
        const w = this.pieceWidth;
        const h = this.pieceHeight;
        if (xx < 0) {
            return JetrisGame.MoveStatus.INVALID_LEFT;
        }
        if (xx + w > this.width) {
            return JetrisGame.MoveStatus.INVALID_RIGHT;
        }
        if (yy + h > this.height) {
            return JetrisGame.MoveStatus.INVALID_BOTTOM;
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
                    return JetrisGame.MoveStatus.COLLISION;
                }
            }
        }
        return JetrisGame.MoveStatus.SUCCESS;
    }

    moveLeft() {
        let next_x = this.x - this.delta;
        if (this.validateMove(next_x, this.y) == JetrisGame.MoveStatus.SUCCESS) {
            this.x = next_x;
        }
    }

    moveRight() {
        let next_x = this.x + this.delta;
        if (this.validateMove(next_x, this.y) == JetrisGame.MoveStatus.SUCCESS) {
            this.x = next_x;
        }
    }

    moveDown() {
        let next_y = this.y + this.delta;
        if (this.validateMove(this.x, next_y) == JetrisGame.MoveStatus.SUCCESS) {
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
            case JetrisGame.MoveStatus.COLLISION:
                this.degreesIndex = curr_degree;
                break;
            case JetrisGame.MoveStatus.INVALID_LEFT:
                next_x = 0;
                if ((moveResult = this.validateMove(next_x, this.y)) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case JetrisGame.MoveStatus.INVALID_RIGHT:
                next_x = this.width - this.pieceWidth;
                if ((moveResult = this.validateMove(next_x, this.y)) != 0) {
                    this.degreesIndex = curr_degree;
                } else {
                    this.x = next_x;
                }
                break;
            case JetrisGame.MoveStatus.INVALID_BOTTOM:
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

    projectPieceShadow() {
        let next_y = this.y;
        while ((this.validateMove(this.x, next_y + this.delta) == JetrisGame.MoveStatus.SUCCESS)) {
            next_y += this.delta;
        }
        if (next_y != this.y) {
            let pieceBmp = this.pieceBitmap;
            for (let i = 0; i < pieceBmp.data.length; i += 4) {
                if (pieceBmp.data[i + 3] != 0)
                    pieceBmp.data[i + 3] = 65;
            }
            let osc = new OffscreenCanvas(this.pieceWidth, this.pieceHeight);
            osc.getContext("2d").putImageData(pieceBmp, 0, 0);
            this.ctx.drawImage(osc, this.x, next_y);
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
                this.playSound(JetrisGame.Sounds.MOVE, true);
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
        this.projectPieceShadow();
    }

    gravity() {
        clearInterval(this.gravityIntervalHandler);

        if (!this.moveDown()) {
            if (this.y == 0) {
                this.stop();
                this.pause = () => { return false; };
                this.playSound(JetrisGame.Sounds.GAME_OVER);
                window.alert('Game Over');
                return;
            }
            this.playSound(JetrisGame.Sounds.LAND);
            this.nextPiece();
        }
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
    }

    run() {
        this.inputQueue.length = 0;
        this.refreshIntervalHandler = setInterval(this.gameLoop.bind(this), JetrisGame.refreshInterval);
        this.gravityIntervalHandler = setInterval(this.gravity.bind(this), this.gravityInterval);
        this.pause = function() {
            this.playSound(JetrisGame.Sounds.PAUSE);
            this.stop();
            return true;
        }
    }

    stop() {
        if (this.refreshIntervalHandler)
            clearInterval(this.refreshIntervalHandler);

        if (this.gravityIntervalHandler)
            clearInterval(this.gravityIntervalHandler);
        this.pause = function() {
            this.playSound(JetrisGame.Sounds.PAUSE);
            this.run();
            return false;
        }
        this.ctx.drawImage(this.bgImage, 0, 0);
    }

    mute() {
        this.muted = !this.muted;
        return this.muted;
    }
}
