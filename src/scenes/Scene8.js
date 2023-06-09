class Scene8 extends Phaser.Scene {
    constructor() {
        super('Scene8');
    }

    counter = 0;
    preload() {
        this.load.image('street2', './assets/street2.png');
        this.load.image('girl8', './assets/sam.png');
        this.load.image('textbox', './assets/textbox.png');


        
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street2').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435

        //For person
        this.p2 = new Character(this, 150, 300, 'girl8').setScale(.5).setOrigin(0, 0);

        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.textbox = this.add.image(370, 440, 'textbox').setScale(.6).scaleY=.3;
        this.text1 = this.add.text(260, 435);
        this.text1.setText(`Press T to Enter Store`);

        this.cameras.main.fadeIn(1000, 0, 0, 0)

    }

    update() {

        this.p2.update();

        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene9");    
          }

    }
}