'use strict';

export class Controller {
    constructor() {
        this.keysDown = new Object();
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }
    keyDownHandler(e) {
        this.keysDown[e.key] = true;
    }
    keyUpHandler(e) {
        this.keysDown[e.key] = false;
    }
    isDown(key) {return this.keysDown[key];}
}