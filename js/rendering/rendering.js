class Rendering {
    static init() {
        // Calls the canvas to the renderer
        this.ctx = EngineStart.ctx;
        this.canvas = EngineStart.canvas;
    }
    
    // Clears the screen to white
    static clearScreen() {
        this.ctx.save();
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }
    
    // Main render function that calls the sub-functions
    static render() {
        // Clear the screen first
        this.clearScreen();

        // Draw the render test
        RenderTest(this.ctx, 50, 50);
    }
}

window.Rendering = Rendering;
