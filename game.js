'use strict';
const GameStateStarting = 0; // FIXME
const GameStateStarted = 1; // FIXME
const GameStateRunning = 2; // FIXME

// FIXME another file
function drawRect(context, x, y, width, height, fillStyle, strokeStyle, lineWidth) {
    context.beginPath();
    context.fillStyle = fillStyle;
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.rect(x, y, width, height);
    context.stroke();
    context.fill();
    context.closePath();
}

class GameStates {}

export class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        // TODO scale context/canvas
        // let factor = this.canvas.width / REFERENCE_SIZE;
        // this.context.scale(factor, factor);
        this.state = GameStateStarting;
    }
    draw() {
        this.context.clearRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
        if (this.state == GameStateStarting) {
            this.fillBackground("blue"); // FIXME
        } else if (this.state == GameStateStarted) {
        } else if (this.state == GameStateRunning) {
            this.fillBackground("yellow");
        }
    }
    fillBackground(color) {
        drawRect(
            this.context,
            0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight,
            color, color, 0);
    }
    run() {
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}