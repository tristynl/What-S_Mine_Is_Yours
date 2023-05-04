class Scene7 extends Phaser.Scene {
    constructor() {
        super('Scene7');
    }

    preload() {
        this.load.image('toy', './assets/toystore.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'toy').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene8');    
        }
    }
}