'use strict';
import { PseudoGravityObject } from "./gameobject.js";

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
    }
}