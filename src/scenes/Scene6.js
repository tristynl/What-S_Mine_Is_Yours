class Scene6 extends Phaser.Scene {
    constructor() {
        super('Scene6');
    }

    preload() {
        this.load.image('street1', './assets/street.png');
        this.load.image('boy6', './assets/player2.png');

        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street1').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);

        this.p1 = new Character(this, 150, 300, 'boy6').setScale(.5).setOrigin(0, 0);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.text1 = this.add.text(260, 435);
        this.text1.setText(`Press T to Enter Store`);

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }


    update() {

        this.p1.update();

        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene7");    
          }

    }
}