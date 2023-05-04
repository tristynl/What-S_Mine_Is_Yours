class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    preload() {
        this.load.image('bedroom2', './assets/bedroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom2').setOrigin(0, 0);
        console.log("We at scene 3 y'all");
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {   
            this.scene.start('Scene4');  
        }
        
        
    }
}