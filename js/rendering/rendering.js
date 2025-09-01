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
        
        // Then render the background
        //this.renderBackground();

        // Then render the foreground
        //this.renderForground();
    }
}

window.Rendering = Rendering;
