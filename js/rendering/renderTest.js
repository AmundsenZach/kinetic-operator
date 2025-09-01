// Draws a red rectangle on the canvas
function RenderTest(ctx, x, y, width, height) {
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);
    ctx.restore();
}

// Expose the function globally if needed
window.RenderTest = RenderTest;
