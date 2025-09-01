class KeyboardInput {
    constructor() {
        this.keys = new Set();
        this.actions = new Map();

        // Bind keydown and keyup events
        window.addEventListener('keydown', (e) => {
            this.keys.add(e.code);
            console.log(`Key down: ${e.code}`);
        });

        window.addEventListener('keyup', (e) => {
            this.keys.delete(e.code);
            console.log(`Key up: ${e.code}`);
        });
    }

    // Register a new action
    registerAction(actionName, keyBindings) {
        this.actions.set(actionName, keyBindings);
    }

    // Check if a specific action is active
    isActionActive(actionName) {
        const keyBindings = this.actions.get(actionName);
        if (!keyBindings) return false;
        return keyBindings.some(key => this.keys.has(key));
    }

    // Check if a specific action was just pressed
    isActionJustPressed(actionName) {
        const keyBindings = this.actions.get(actionName);
        if (!keyBindings) return false;
        return keyBindings.some(key => this.keys.has(key) && this.keysPressedRecently.has(key));
    }
}

window.KeyboardInput = KeyboardInput;
