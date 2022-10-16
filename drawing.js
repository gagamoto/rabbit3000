'use strict';

export class Drawing {
    static drawRect(context, x, y, width, height, fillStyle, strokeStyle, lineWidth) {
        context.beginPath();
        context.fillStyle = fillStyle;
        context.strokeStyle = strokeStyle;
        context.lineWidth = lineWidth;
        context.rect(x, y, width, height);
        context.stroke();
        context.fill();
        context.closePath();
    }
}
