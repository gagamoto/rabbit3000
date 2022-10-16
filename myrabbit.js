'use strict';
import { GameObject } from "./gameobject.js";

export class MyRabbit extends GameObject{
    constructor(xCenter=0, yCenter=0, width, height) {
        console.assert(width);
        console.assert(height);
        super(
            xCenter - width / 2,
            yCenter - height / 2,
            width, height
        );
    }
}