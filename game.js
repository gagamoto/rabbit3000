'use strict';
import { MyRabbit } from './myrabbit.js';
import { Drawing } from './drawing.js';
import { Controller } from './controller.js';

const GameStateStarting = 0; // FIXME
const GameStateStarted = 1; // FIXME
const GameStateRunning = 2; // FIXME


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

        this.controller = new Controller();

        this.state = null;
        this.pc = null;
    }
    control() {
        // FIXME boost 
        if (this.controller.isDown("ArrowUp")) { // FIXME and not was down!
            this.pc.boostUp();
        }
        // FIXME increase speed (dx)
        if (this.controller.isDown("ArrowRight")) {
            this.pc.x += 1;
        } else if (this.controller.isDown("ArrowLeft")) {
            this.pc.x -= 1;
        }
        // FIXME enable/disable gravity for debug purpose
        // if (!this.controller.isDown("g")) {
        //     this.pc.dy = 0;
        // } else { this.pc.dy = 0; }
        // FIXME reset character position for debug purpose
        if (this.controller.isDown("r")) {
            console.debug("Reset central position!");
            this.pc.setCenterPosition(Game.REFERENCE_WIDTH/2, Game.REFERENCE_HEIGHT/2);
        }
    }
    draw() {
        this.context.clearRect(0, 0, this.context.canvas.clientWidth, this.context.canvas.clientHeight);
        // Draw a background (debug)
        if (this.state == GameStateStarting) {
            this.fillBackground("orange"); // FIXME
        } else if (this.state == GameStateStarted) {
        } else if (this.state == GameStateRunning) {
            this.fillBackground("yellow");
        }
        // Draw playable character
        this.pc.draw(this.context);
    }
    fillBackground(color) {
        Drawing.drawRect(
            this.context,
            0, 0, Game.REFERENCE_WIDTH, Game.REFERENCE_HEIGHT,
            color, color, 0);
    }
    initialize() {
        // FIXME overload
        this.state = GameStateStarting;
        // FIXME define RABBIT width/height somewhere else
        this.pc = new MyRabbit(
            Game.REFERENCE_WIDTH/2, Game.REFERENCE_HEIGHT/2,
            105, 105);
    }
    move() {
        this.pc.move();
    }
    run() {
        this.control();
        this.move();
        // this.collide(); // FIXME
        this.draw();
        requestAnimationFrame(() => this.run());
    }
}