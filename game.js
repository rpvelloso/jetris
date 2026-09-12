import {JetrisGame} from './jetris.js'
// interface specific JS code
const piecesFiles = [
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA+UlEQVR42u2XIQ7CMBSG/xJoqnBTc5yABIECj+QCU4RT7BTcgROQcAEUjqAw4CbIHDO8IoaBQYPcL5bxnmlqvry+r036Aw0vAwCP87LsRElt2Ho1Q5IWhsnrvjf364Z6chavatB7j340BADc8kNtMItXNShekGd7RPEY4qV2gyzeZ4LiEQ8myC47ihoWL1D8vTIUM3iB4tNxS3skLF6gmFksXjBBZrF4P3eQNkFPnqAqbr1iEfIE5e8eCQFoDbdBa8iKreMqto6t2JEVu9ePejF3JeO+TEc9JGlhmLzGl2YSzSSaSTSTaCbRD6sqVsWaSTSTaCZpdSZ5ArmLMEyTW1i2AAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAABOklEQVR42u2XoYpCYRSE5wfDNRhlDSbBJgbBtMUn0OobGE1232BNG/c1tIoYRBAUiwgmg+gT/LdoUrY7czkXz5R70zDMcOD/AOMKADA8/N77X523zXqTAa7jRWAGLDx/ppeVyQZfAdM0RbNcBwDsbkd7AWOMWJ/3aFcbiDHabPC71sLytLE78f+vyYln27ntIzF9xZYOI58N+sTeoDeYRcBgfeLEeoNJQRPwb/RDMSu2Kvg4SZiE6SdjEpafjElYfjImYfnJmITlJ2MSlp+MSVh+sscCy0/23GL55adBn9gb9AYzZhKWn4xJWH4yJmH5BQAodet3FpNcx4vA9MsHk7AlYRK26EzCFp1J2KIziaJBKpMoAlKZRDExlUlUDZoNSH9ufVyDPrE36A1mETBYnzix3uCTSdhiMskDJLgr2i3BHVsAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAABLklEQVR42u2XIQ6DUBBEd5P+VDaYGnoBHArVG3AFkipUz8EVqnsRBBaFIOECVXVNMB9DbT0zZJssBrcZ3mTDPhHjjzKGzk2zHsty85xnVcmB9eVz10Hm0AIuyyKnLBMRkc802QsYY5T3MMg5zyXGaJPgpSjk1fd2K/59m6x4alvbS2J6i7cshhP0ip2gE9wpYLBecTBfsSrnor6l6YqYc00SMf8o2iHqcVSKk6AcguYkKIegOQnKIWhOgnIImpOgHILmJCiHoDkJihztWECdR7RzyzxBr9gJOsEdAgamk6AcguYkKIegOAnSIepxVHeSrU6CDEhzEnhAtJPAA6KdhEIQ6SSUgIxfHrRipJPQCJoNaGkx/pOgV+wEneDOTmKy4mC+YlVOwPvjARnGcIgvlCUsimde1hAAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADwAAAAoCAYAAACiu5n/AAABH0lEQVR42u2YIQ7CUBBEp6FF4jCgCKIJAoVGcRASFIfAcQACR+AguCYkKBQoFBgcguTXgGtokJ2fzM/fNXUvO53pphkgskkAoNi4z3CWNoatF3vsjvNEmVdRbsWb+iZVeZXgsizRyzsAgMf11RisyqsEO+dwOz8xGHfhnGu8oCqv5nA+6eN6ulOio8qrCf59MhZU5NUifTpcaEdGlffnMGtUeTWHmaPKi9dhi7RF2hw2hyM8Wm2o86iRzn4WVOVRHc5a3Aj64KUAsNouKd/HqDtFCLyoJvEBZXdazN1SX2+S3WnJC2Z3WvKC2Z1WEA4zO60gBPv4xZSONLPTCsbhaAQrHSpz2ARbpM1hc9iOFrnTiiLSWUiC2Z2WtGDlDuoLE5ktsWev/ogAAAAASUVORK5CYII=",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAABEklEQVR42u2XoQoCURBF70MXmyYxWGyCYFAEk99gta7NDzAb/QW7df0DMQomgyK6yWKyWeRtWZNid0Zm9b6ymw7DvQzMAYw/BwCThU/77dzHsMF4jjgKneSA+efPan83meBrwCRJ0KgVAQCH883egN57bE9XtOpleO9tJthtVrHZXexW/P41WfFyfbS9JKa32NJiZDNBVswEmeBXBgyMV+wC4wkWlCqeTUcisFKth797dBI6CZ2ETsJjgecWK2aCTJBOQiehk/yck0jy1JxEiqfmJFI8NSeR4qk5iRRPzUmkeGpOIsVTOxakeGrnlhQvOwmyYibIBL/sJFI8NSeR4qk5iRTPAUClM0ylnCSOQifJewBNVy9wfBI/MQAAAABJRU5ErkJggg==",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAYAAAAUufjgAAABGklEQVR42u3XoRIBURQG4LOGHUmTSJqCZBQewDuYDYLmqbyBGR6ApCCRNEnbYu4VqLr/t4f5b9l25uz975k5n5nzkzCKPhazZ2kw+bjOYj62MuvP7/slpA6twRij1Vo9MzPLLwd/DYYQ7XbaWb3dtxCixxsM1ugO7Xrc+I34/esy4vN27XlIgu8p/mQwvvoGFbEiLu4Gg26w8AZT7xGn7iOukDbqaaf6RNQZNVNzf2QSmUQmkUlkEi2silgRyyQyiUwikxRuEqQhslWeUEyCMgTNJChD0EyCMgTNJChD0EyCMgTNJChD0EyCWjBpCytqwaQtrKi3R1u3FPHfR4wyBM0kPzAkGEPQTIIyBM0kKENQTII0RLbKE2S9F3sFKsp7tPt5AAAAAElFTkSuQmCC",
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAA5ElEQVR42u2UPQrCQBCFXyRBthMRBMHCC9ilyiFsPYGVINh4ElvxFnoBK7sItoKC4E8haDPbaGV0sdwp1LevCWk+lpn3DRDilQgABtvrvVste8M64ymOo17ExIufP7PTTXUzLLxigNZatGsVAEB+vniDWXjFAMUKlvsD0kYdYsX7gSy8VwPFIms1sdjsVKrNwnMUfv9qKMLAcxSer9ZqR5qF5yisGRae00DNsPA+bqDahkl4QeGgcFD4PxQWUd4wCS808KsGWErAxtNV2CRg4+k20Cgr8gO8GAAmw77KPTBpBjbeA3oBLV2kDKjdAAAAAElFTkSuQmCC"
];
const bgImage = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAMwAAAGUCAYAAAB5iM3cAAAEx0lEQVR42u3bsUuUcRzH8e/FgXJnB5cOiglhaWBwQ3OjnP9CW5v/g3tbY1Pjbf4Nzc0NhUNZEdxFLipYPRgcXNMvseL6Ds/08HptLh/hgbf4G76tzbdnswBS2hfPn0V1OPIl4D86j59Eu/ywPRj6IjDHJOIqmIiIz3FW2/ji+GtcbqzZs9eIvTtxKyIibvi7AXmCAcGAYEAwIBgQDCAYEAwIBgQDggHBAIIBwYBgQDAgGGio1sr+waw6HEWvv+5rwBzTvd2rm/7VjQfxqRrXNt45vYhquWfPXiP2NjsbMfEvGXjDgGBAMCAYEAwgGBAMCAYEA4IBwQCCAcGAYEAwIBgQDBBu+iHtr5v+j6fvahvvVtP40Wnbs9eIvbvL9930gzcMCAYEA4IBwQCCAcGAYEAwIBgQDCAYEAwIBgQDggHBABERVyfKJ+Oj6NY83q2m9uw1Yu+kOorYWbt+0/9h8rq2X7A0W4jvrZ/27DVi797th276wRsGBAOCAcGAYADBgGBAMCAYEAwIBhAMCAYEA4IBwYBggIj446Z/KRZqHV+a2bPXjL2T8T9u+o+PX9X2C24u9uPb5bk9e43Y29p65KYfvGFAMCAYEAwIBhAMCAYEA4IBwYBgAMGAYEAwIBgQDAgGiIiI1sr+waw6HEWvv+5rwBzTvd3rN/3v37ysbbzXX4+L8y/27DVib3swdNMP3jAgGBAMCAYEAwgGBAOCAcGAYEAwgGBAMCAYEAwIBgQDRISbfkhz02/PXpKbfvCGAcGAYEAwIBhAMCAYEAwIBgQDggEEA4IBwYBgQDAgGKBw0w9Jbvrt2Uty0w/eMCAYEAwIBgQDCAYEA4IBwYBgQDCAYEAwIBgQDAgGBAMUbvohyU2/PXtJbvrBGwYEA4IBwYBgAMGAYEAwIBgQDAgGEAwIBgQDggHBgGCAwk0/JLnpt2cvyU0/eMOAYEAwIBgQDCAYEAwIBgQDggHBAIIBwYBgQDAgGBAMULjphyQ3/fbsJbnpB28YEAwIBgQDggEEA4IBwYBgQDAgGEAwIBgQDAgGBAOCAQo3/ZDkpt+evSQ3/eANA4IBwYBgQDCAYEAwIBgQDAgGBAMIBgQDggHBgGBAMEDhph+S3PTbs5fkph+8YUAwIBgQDAgGEAwIBgQDggHBgGAAwYBgQDAgGBAMCAYo3PRDkpt+e/aS3PSDNwwIBgQDggHBAIIBwYBgQDAgGBAMIBgQDAgGBAOCAcEAhZt+SHLTb89ekpt+8IYBwYBgQDAgGEAwIBgQDAgGBAOCAQQDggHBgGBAMCAYoHDTD0lu+u3ZS3LTD94wIBgQDAgGBAMIBgQDggHBgGBAMIBgQDAgGBAMCAYEAxRu+iHJTb89e0lu+sEbBgQDggHBgGAAwYBgQDAgGBAMCAYQDAgGBAOCAcGAYIDCTT8kuem3Zy/JTT94w4BgQDAgGBAMIBgQDAgGBAOCAcEAggHBgGBAMCAYEAxQuOmHJDf99uwluekHbxgQDAgGBAOCAQQDggHBgGBAMCAYQDAgGBAMCAYEA4IBCjf9kOSm3569JDf94A0DggHBgGBAMIBgQDAgGBAMCAYEAwgGBAOCAcGAYEAwQPH7pn97MPQ1YI7Jzlq0Vp++mPkUkPMLRKMP5C4d5oAAAAAASUVORK5CYII=");
const rect = createImage("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAADFJREFUOI3t1bERADAMwkCR8/4r4yKNB6BEA3wrASbYANgZUxIvIp0KFixYsOBPhBewHpsFJ5d59QUAAAAASUVORK5CYII=");

const soundFiles = [
    'sounds/land.mp3',
    'sounds/line.mp3',
    'sounds/tetris.mp3',
    'sounds/game_over.mp3',
    'sounds/move.mp3',
    'sounds/pause.mp3',
    'sounds/start.mp3'
];

export function createImage(src) {
    let img = new Image();
    img.src = src;
    return img;
}

const sounds = soundFiles.map((s) => new Audio(s));
const piecesImages = piecesFiles.map((src) => createImage(src));

let statsHTML = '';
for (let i = 0; i < piecesFiles.length; ++i) {
    statsHTML = statsHTML +
        `<div><img src="` + piecesImages[i].src +
        `"><input disabled=disabled type=text id="piece` + i + '"></div>';
}
statsHTML = statsHTML + `<div><input disabled=disabled type=text id="count"></div>`;

const values = ['', 'I', 'II', 'III', 'IV'];
for (let i = 1; i < 5; ++i) {
    statsHTML = statsHTML +
        `<div><input disabled=disabled value=${values[i]} size="1"/><input disabled=disabled type=text id="score` + i + '"></div>';
}

document.getElementById("stats").innerHTML = statsHTML;

let game;
let muted = false;

export function newGame(newGameButton) {
    if (window.confirm('New Game?')) {
        resetGame();
    }
    newGameButton.blur();
}

export function pause(pauseButton) {
    if (game) {
        if (game.pause()) {
            pauseButton.classList.add("active");
            document.getElementById("pause_icon").innerHTML = "play_arrow";
        } else {
            pauseButton.classList.remove("active");
            document.getElementById("pause_icon").innerHTML = "pause";
        }
    }
    pauseButton.blur();
}

export function mute(muteButton) {
    if ((game && game.mute()) || !muted) {
        muteButton.classList.add("active");
        document.getElementById("mute_icon").innerHTML = "volume_off";
    } else {
        muteButton.classList.remove("active");
        document.getElementById("mute_icon").innerHTML = "volume_up";
    }
    muted = !muted;
    muteButton.blur();
}

export function resetGame() {
    if (game)
        game.stop();

    game = new JetrisGame(
        document.getElementById("jetris"),
        rect.width,
        piecesImages,
        bgImage,
        sounds,
        muted,
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

    game.playSound(JetrisGame.Sounds.START);
    game.run();
}

let splash = new Image();
splash.onload = () => {
    document.getElementById("jetris").getContext("2d").drawImage(splash, 0, 0);
    resetGame();
};
splash.src = "data:image/png;base64, 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";
