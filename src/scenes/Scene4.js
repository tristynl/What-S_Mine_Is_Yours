class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }

    preload() {
        this.load.image('bathroom', './assets/bathroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bathroom').setOrigin(0, 0);
        console.log("We at scene 4 y'all");
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene5');    
        }
    }
}