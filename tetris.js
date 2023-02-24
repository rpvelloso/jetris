const piecesFiles = [
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAIAAAAnX375AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqDu0g0iFDdbIgKuIoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWZgHFA1y8gkE2K+sCIGXyEgjAEEEJWYqaeyCzl4jq97+Ph6F+dZ3uf+HP1K0WSATySeZbphEa8TT29aOud94girSArxOfGYQRckfuS67PIb57LDAs+MGLnMHHGEWCx3sdzFrGKoxFPEMUXVKF/Iu6xw3uKs1uqsfU/+wlBRW85ynWYUSSwihTREyKijihosxGnVSDGRof2Eh3/Y8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTQolgJ4X2/4YAYK7QKth29/Htt06AfzPwJXW8W80gZlP0hsdLXYEDG4DF9cdTd4DLneAoSddMiRH8tMUSiXg/Yy+qQCEb4G+Vbe39j5OH4AcdbV0AxwcAqNlyl7zeHdvd2//nmn39wM5PnKQh7w60wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEw4ELdTUnvAAAABkSURBVFjDY2CgO2BkYGDwi/r/4/sz4vVwcEptWka+RhYGBoYf35/9/P6cDPeSp5GJ/gE7auWolaNWjlo5auWwspIFUo2RpAeunmyNIwCMNkRG8+WolaNWjlo5auWolaMNEQgAAFJTMFO9mn/BAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACYAAAA5CAYAAABavVngAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWh3YQcchQBcGCqIjgIlUsgoXSVmjVweTSL2jSkKS4OAquBQc/FqsOLs66OrgKguAHiKuLk6KLlPi/pNAixoPjfry797h7BwiNClPNrnFA1SwjFY+J2dyq2PMKASEEMYtRiZl6Ir2Ygef4uoePr3dRnuV97s8RVPImA3wi8RzTDYt4g3h609I57xOHWUlSiM+Jxwy6IPEj12WX3zgXHRZ4ZtjIpOaJw8RisYPlDmYlQyWeIo4oqkb5QtZlhfMWZ7VSY6178hcG8tpKmus0hxDHEhJIQoSMGsqowEKUVo0UEynaj3n4Bx1/klwyucpg5FhAFSokxw/+B7+7NQuTE25SIAZ0v9j2xzDQsws067b9fWzbzRPA/wxcaW1/tQHMfJJeb2uRI6B/G7i4bmvyHnC5Aww86ZIhOZKfplAoAO9n9E05IHQL9K25vbX2cfoAZKir5Rvg4BAYKVL2use7ezt7+/dMq78f4F9y01pJsKsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAhMOAi2Cjjl2AAAApklEQVRo3u3WsQ3CQBQE0T3kiOuClFZcCuVQCq2QOqAGX2wCi5AET/CR5udePcuSNS3JFu4aNTQlyXPOfRnpv45cesb1kRv4gjtsGemvNecUulOKnjBhwoQJEybsT2HTp6eOjBx9/ltxlixYGsZ+SjKtqS08raktfxfChAkTJkyYsOJpTW2VLdgG723opyQPTWvyTGthwoQJEyZMWOG0Jo9M65IF+wZ1wTaDw91pnwAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACYAAAA5CAYAAABavVngAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWh3YQcchQBcGCqIjgIlUsgoXSVmjVweTSL2jSkKS4OAquBQc/FqsOLs66OrgKguAHiKuLk6KLlPi/pNAixoPjfry797h7BwiNClPNrnFA1SwjFY+J2dyq2PMKASEEMYtRiZl6Ir2Ygef4uoePr3dRnuV97s8RVPImA3wi8RzTDYt4g3h609I57xOHWUlSiM+Jxwy6IPEj12WX3zgXHRZ4ZtjIpOaJw8RisYPlDmYlQyWeIo4oqkb5QtZlhfMWZ7VSY6178hcG8tpKmus0hxDHEhJIQoSMGsqowEKUVo0UEynaj3n4Bx1/klwyucpg5FhAFSokxw/+B7+7NQuTE25SIAZ0v9j2xzDQsws067b9fWzbzRPA/wxcaW1/tQHMfJJeb2uRI6B/G7i4bmvyHnC5Aww86ZIhOZKfplAoAO9n9E05IHQL9K25vbX2cfoAZKir5Rvg4BAYKVL2use7ezt7+/dMq78f4F9y01pJsKsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAhMOARz4fWqPAAAAlElEQVRo3u3WwQ1AQBBG4X+EAnSiPCUoTycbZwd64B1WvLmbfHaTzauwc1GLxtCyLXtapscL5py1ZsFhaZlyvP/hIZ2OMGHChAkTJuyjMD575pzE99VrwRa5DL9KKof5tIZy2LQWJkyYMGHChPWe1lAO02ndb8GCUyiMTGv2xMi09rkQJkyYMGHChP0krcHivOB9yNxJJCmDPsBYaAAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADkAAAAmCAYAAAB+mDPLAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqDu0g0iFDdbIgKuIoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWZgHFA1y8gkE2K+sCIGXyEgjAEEEJWYqaeyCzl4jq97+Ph6F+dZ3uf+HP1K0WSATySeZbphEa8TT29aOud94girSArxOfGYQRckfuS67PIb57LDAs+MGLnMHHGEWCx3sdzFrGKoxFPEMUXVKF/Iu6xw3uKs1uqsfU/+wlBRW85ynWYUSSwihTREyKijihosxGnVSDGRof2Eh3/Y8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTQolgJ4X2/4YAYK7QKth29/Htt06AfzPwJXW8W80gZlP0hsdLXYEDG4DF9cdTd4DLneAoSddMiRH8tMUSiXg/Yy+qQCEb4G+Vbe39j5OH4AcdbV0AxwcAqNlyl7zeHdvd2//nmn39wM5PnKQh7w60wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEw4FDxiv7lUAAACZSURBVGje7dgxDoMwEETR78iNj4A4VKS0OR8tUg6FUHIBSmhpA1tswt/eIz8XlnYKsPLnUwFGXsPM1I6GdPTLg/sza1YFmJnam0+LeLWMWTcuMCJFihQpUqRIkSJFisy2T3b0y5mQ/fmMWeUKzUAJzlsz3q1Gv1pk/ZEWGVl/+LuKFClSpEiRIkWKFCnyNyd81YqsP2wGvpgN9uE0b5frn5AAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACYAAAA5CAYAAABavVngAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqDu0g0iFDdbIgKuIoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWZgHFA1y8gkE2K+sCIGXyEgjAEEEJWYqaeyCzl4jq97+Ph6F+dZ3uf+HP1K0WSATySeZbphEa8TT29aOud94girSArxOfGYQRckfuS67PIb57LDAs+MGLnMHHGEWCx3sdzFrGKoxFPEMUXVKF/Iu6xw3uKs1uqsfU/+wlBRW85ynWYUSSwihTREyKijihosxGnVSDGRof2Eh3/Y8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTQolgJ4X2/4YAYK7QKth29/Htt06AfzPwJXW8W80gZlP0hsdLXYEDG4DF9cdTd4DLneAoSddMiRH8tMUSiXg/Yy+qQCEb4G+Vbe39j5OH4AcdbV0AxwcAqNlyl7zeHdvd2//nmn39wM5PnKQh7w60wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEw4FJloddjkAAAB9SURBVGje7daxCcAwDAXRU3Cb/QfNAHKXBfIDMpwqV+KBQVwBTW4qtWgBdIBWRXTW+3o+bLmJz8XQESZMmDBhwoQdCiuggz1WUdjEgh37laa150KYMGHChAkTZlqfldZp2Ny0Tu36J60DuzwXwoQJEyZMmLDZaR3rsbEFuwHO/Rx0mt+L1wAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACYAAAA5CAYAAABavVngAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqDu0g0iFDdbIgKuIoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWZgHFA1y8gkE2K+sCIGXyEgjAEEEJWYqaeyCzl4jq97+Ph6F+dZ3uf+HP1K0WSATySeZbphEa8TT29aOud94girSArxOfGYQRckfuS67PIb57LDAs+MGLnMHHGEWCx3sdzFrGKoxFPEMUXVKF/Iu6xw3uKs1uqsfU/+wlBRW85ynWYUSSwihTREyKijihosxGnVSDGRof2Eh3/Y8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTQolgJ4X2/4YAYK7QKth29/Htt06AfzPwJXW8W80gZlP0hsdLXYEDG4DF9cdTd4DLneAoSddMiRH8tMUSiXg/Yy+qQCEb4G+Vbe39j5OH4AcdbV0AxwcAqNlyl7zeHdvd2//nmn39wM5PnKQh7w60wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEw4GAk0zwSsAAACOSURBVGje7dbRCYAwDEXRRPrRFbpCl3B2l+gKdYQKBd1BnxDx5r/hQKBcN+2cqkXJ1NPWZn3c31vytLpVPayPZPvxeO9iQQcYMGDAgAED9lGYPntKnor3HrVgf3RK0prvAhgwYMCAAQNGWr+Z1q5cpj+lKIf1aS3KYdIaGDBgwIABAxY9rUU5rE7rkAV7AQE0NYMU3xyeAAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEwAAAATCAIAAAC1LXxeAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV/TSkWqDu0g0iFDdbIgKuIoVSyChdJWaNXB5NIvaGJIUlwcBdeCgx+LVQcXZ10dXAVB8APE1cVJ0UVK/F9SaBHjwXE/3t173L0DhGaNqWZgHFA1y8gkE2K+sCIGXyEgjAEEEJWYqaeyCzl4jq97+Ph6F+dZ3uf+HP1K0WSATySeZbphEa8TT29aOud94girSArxOfGYQRckfuS67PIb57LDAs+MGLnMHHGEWCx3sdzFrGKoxFPEMUXVKF/Iu6xw3uKs1uqsfU/+wlBRW85ynWYUSSwihTREyKijihosxGnVSDGRof2Eh3/Y8afJJZOrCkaOeWxAheT4wf/gd7dmaXLCTQolgJ4X2/4YAYK7QKth29/Htt06AfzPwJXW8W80gZlP0hsdLXYEDG4DF9cdTd4DLneAoSddMiRH8tMUSiXg/Yy+qQCEb4G+Vbe39j5OH4AcdbV0AxwcAqNlyl7zeHdvd2//nmn39wM5PnKQh7w60wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEw4GGl5fWX0AAABiSURBVFjD7dexDYAgEIXhhzkWYAVr9x/E2hVcgDNSmFBL58n/qmv+4ktokCZYknSvm7wORJbTsQcKTZK8npe/D0u/goTLDM8VJEiQIEGCBAkSJEiQH5o9n64yFuV+hAl/vwbftyh2GeEQvAAAAABJRU5ErkJggg=="
];

function createImage(src) {
    img = new Image();
    img.src = src;
    return img;
}

const bg_image = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMIAAAGACAYAAAD/Br3iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOFSURBVHhe7dMxAYAwEMDAB/9iENUdCZChLnq3REGudz3fwOHuXTiaESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgBgBYgSIESBGgJn5AXYLBoKLZSddAAAAAElFTkSuQmCC");
const rect = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAoSURBVDhPYwCC/1TEDP+pAUYNIx2MGkY6GDWMdDBqGOkAbhh1MMN/AJwCx3FiV4sdAAAAAElFTkSuQmCC");

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
        let curr_y = this.height - this.delta;
        let off = this.offScreenCanvas.getImageData(
            this.xOffset, this.yOffset, 
            this.width, this.height);
        let rowLength = off.width * 4 * this.delta;
        for (let i = 0; i < Game.rows; ++i) {
            let collapse = true;
            for (let j = 0; j < Game.cols; ++j) {
                if (off.data[(rowLength*i) + (j*this.delta*4) + 3] == 0) {
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

        for (let i = 0; i < off.data.length; i += 4) {
            if ((pieceBmp.data[i+3] > 75 && off.data[i+3] != 0)) {
                console.log(pieceBmp.data.slice(i, i+4));
                return -4;
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
