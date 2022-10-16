'use strict';
import {Drawing} from './drawing.js';

export class GameObject {
    constructor(x=0, y=0, width, height) {
        console.assert(width);
        console.assert(height);
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        // Hit box for debug purpose
        Drawing.drawRect(
            context, this.x, this.y, this.width, this.height,
            "black", "red", 10)
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
}