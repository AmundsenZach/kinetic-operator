// Initiation of the engine assets and game loop

const EngineStart = {
    init() {
        // Canvas Initiation
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Canvas State Change via EngineEvent
        window.addEventListener('resize', () => {
            window.engineEvent.emit('canvasResize', {
                width: window.innerWidth,
                height: window.innerHeight
            });
        });

        // Listen for canvasResize event
        window.engineEvent.on('canvasResize', ({ width, height }) => {
            this.canvas.width = width;
            this.canvas.height = height;
            this.ctx = this.canvas.getContext('2d');
        });

        const engineLoop = new EngineLoop();
        engineLoop.loop();
    }
}

// Create a global EngineEvent instance
window.engineEvent = new EngineEvent();
window.EngineStart = EngineStart;
