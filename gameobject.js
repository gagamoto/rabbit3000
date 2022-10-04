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

export class GameObject {
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