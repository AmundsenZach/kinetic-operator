function RenderTest(ctx, x, y, width, height, fill) {
    ctx.save();
    // Draws a colored rectangle on the canvas
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
}

window.RenderTest = RenderTest;
