class EngineLoop {
    constructor() {
        // Initilizes the rendering system
        Rendering.init();

        // Listen for a custom event
        window.engineEvent.on('gameTick', () => {
            // Respond to game tick event
        });
    }
    
    // Primary game loop
    loop() {
        // Emit a gameTick event each frame
        window.engineEvent.emit('gameTick');

        Rendering.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.EngineLoop = EngineLoop;
