class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

    preload() {
        this.load.image('candy', './assets/candyshop.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'candy').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            console.log("Good for you bro");
            //this.scene.start('Scene5');    
        }
    }
}