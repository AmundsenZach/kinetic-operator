class EngineLoop {
    constructor() {
        // Any initialization can go here
    }
    
    loop() {
        Rendering.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.EngineLoop = EngineLoop;
