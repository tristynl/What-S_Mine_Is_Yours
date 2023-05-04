class Scene8 extends Phaser.Scene {
    constructor() {
        super('Scene8');
    }

    preload() {
        this.load.image('street2', './assets/street2.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street2').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene9');    
        }
    }
}