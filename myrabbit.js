'use strict';
import { PseudoGravityObject } from "./gameobject.js";
import { Drawing } from './drawing.js';

export class MyRabbit extends PseudoGravityObject{
    constructor(xCenter=0, yCenter=0, width, height) {
        console.assert(width);
        console.assert(height);
        super(
            xCenter - width / 2,
            yCenter - height / 2,
            width, height
        );
        // FIXME Set pseudo gravity values here!
        this.boost = 0;
    }
    boostUp() {
        // FIXME Icarus lock
        if (this.getTop() < 0) {
            console.warn("Icarus lock, make a sound!"); // FIXME
            return;
        }
        if (this.isBoosting()) {
            console.warn("Already boosting, make a sound!"); // FIXME
            return;
        }
        this.boost = 16; // FIXME how many frames? adjust!
        this.dy = -26;
    }
    isBoosting() {return this.boost > 0;}
    move() {
        if (this.boost > 0) {this.boost -= 1;}
        super.move();
    }
    draw(context) {
        if (this.isBoosting()) {
            Drawing.drawRect(
                context, this.x, this.y, this.width, this.height,
                "red", "red", 10) // FIXME debug!
        } else {super.draw(context);}
    }
}