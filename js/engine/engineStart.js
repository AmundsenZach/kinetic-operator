// Initiation of the engine assets and game loop

const EngineStart = {
    init() {
        // Canvas Initiation
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Canvas State Change
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            
            this.ctx = this.canvas.getContext('2d');
        });

        const engineLoop = new EngineLoop();
        engineLoop.loop();
    }
}

window.EngineStart = EngineStart;
