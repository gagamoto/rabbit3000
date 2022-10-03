'use strict';
const GameStateStarting = 0; // FIXME
const GameStateStarted = 1; // FIXME
const GameStateRunning = 2; // FIXME

class GameStates {}

export class Game {
    constructor() {
        this.canvas = document.createElement("canvas");
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
            // FIXME
            let width = this.canvas.width;
            let height = this.canvas.height;
            this.context.beginPath();
            this.context.fillStyle = "blue";
            this.context.strokeStyle = "yellow";
            this.context.lineWidth = 10;
            this.context.rect(0, 0, width, height);
            this.context.stroke();
            this.context.fill();
            this.context.closePath();
        } else if (this.state == GameStateStarted) {
        } else if (this.state == GameStateRunning) {}
    }
    run() {
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}