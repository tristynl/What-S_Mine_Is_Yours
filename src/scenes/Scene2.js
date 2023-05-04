class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('bedroom1', './assets/bedroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        console.log("We at scene 2 y'all");
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.sound.play('sfx_select');
            console.log("Bitch please work");   
        }
        
        
    }
}