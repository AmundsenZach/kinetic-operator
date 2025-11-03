class RenderFrame {
    static init() {
        this.ctx = EngineStart.ctx;
        this.canvas = EngineStart.canvas;
        this.camera = new Camera();
        
        // Single listener for rendering - triggered by gameTick
        window.engineEvent.on('gameTick', () => {
            this.render();
        });
    }

    static clearScreen() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);  // Reset transform first
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    static applyTransform() {
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(canvasWidth / 2, canvasHeight / 2);
        this.ctx.scale(this.camera.zoom, this.camera.zoom);
        this.ctx.translate(-this.camera.x, -this.camera.y);
    }
    
    static render() {
        // Clear screen, apply camera transform
        this.clearScreen();  // Clear entire canvas
        this.applyTransform(); 
        
        // Draw test objects
        RenderTest(this.ctx, this.canvas.width / 2 - (8 * this.canvas.height / 40), this.canvas.height / 2 - (8 * this.canvas.height / 40));
    }
}

window.RenderFrame = RenderFrame;