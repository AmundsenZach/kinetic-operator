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

        // Draw a red rectangle in RenderTest
        RenderTest(this.ctx, 50, 50, EngineStart.canvas.width - 100, EngineStart.canvas.height - 100, "red");

        // Test layering
        RenderTest(this.ctx, 100, 100, EngineStart.canvas.width - 200, EngineStart.canvas.height - 200, "blue");
    }
}

window.Rendering = Rendering;
