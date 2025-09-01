class EngineLoop {
    constructor() {
        // Initilizes the rendering system
        Rendering.init();

        // Listen for a custom events
        this.keyboardInput = new KeyboardInput();
        window.engineEvent.on('gameTick', () => {
            // Respond to game tick event
        });
    }
    
    // Primary game loop
    loop() {
        // Emit a gameTick event each frame
        window.engineEvent.emit('gameTick');

        // Primary game refresh
        Rendering.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.EngineLoop = EngineLoop;
