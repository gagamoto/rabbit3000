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

// FIXME another file
class GameObject {
    constructor(x=0, y=0, width, height) {
        console.assert(width);
        console.assert(height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        // Hit box for debug purpose
        drawRect(
            context, this.x, this.y, this.width, this.height,
            "purple", "purple", 0)
    }
}

export class Game {
    REFERENCE_HEIGHT = 1000;
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth; // FIXME 16:8
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');
        this.scaleFactor = this.canvas.height / Game.REFERENCE_HEIGHT;
        this.context.scale(this.scaleFactor, this.scaleFactor);
        this.state = null;
        this.pc = null;
    }
    draw() {
        this.context.clearRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
        // Draw a background (debug)
        if (this.state == GameStateStarting) {
            this.fillCanvasBackground("blue"); // FIXME
        } else if (this.state == GameStateStarted) {
        } else if (this.state == GameStateRunning) {
            this.fillCanvasBackground("yellow");
        }
        // Draw playable character
        this.pc.draw(this.context);
    }
    fillCanvasBackground(color) {
        drawRect(
            this.context,
            0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight,
            color, color, 0);
    }
    initialize() {
        // FIXME overload
        this.state = GameStateStarting;
        this.pc = new GameObject(0, 0, 10, 10); // FIXME define width/height somewhere else
    }
    run() {
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}