class EngineLoop {
    constructor() {
        // Initilizes the rendering system
        Rendering.init();
    }
    
    // Primary game loop
    loop() {
        Rendering.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.EngineLoop = EngineLoop;
