'use strict';
import {GameObject} from './gameobject.js';

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
    static RATIO_WIDTH = 10;
    static RATIO_HEIGHT = 16;
    static REFERENCE_HEIGHT = 1600;
    static REFERENCE_WIDTH = 1000;

    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.height = window.innerHeight;
        this.canvas.width = this.canvas.height * Game.RATIO_WIDTH / Game.RATIO_HEIGHT;
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
            this.fillBackground("blue"); // FIXME
        } else if (this.state == GameStateStarted) {
        } else if (this.state == GameStateRunning) {
            this.fillBackground("yellow");
        }
        // Draw playable character
        this.pc.draw(this.context);
    }
    fillBackground(color) {
        drawRect(
            this.context,
            0, 0, Game.REFERENCE_WIDTH, Game.REFERENCE_HEIGHT,
            color, color, 0);
    }
    initialize() {
        // FIXME overload
        this.state = GameStateStarting;
        this.pc = new GameObject(0, 0, 100, 100); // FIXME define width/height somewhere else
    }
    run() {
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}