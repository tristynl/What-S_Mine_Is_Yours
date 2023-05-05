class Scene6 extends Phaser.Scene {
    constructor() {
        super('Scene6');
    }

    preload() {
        this.load.image('street1', './assets/street.png');
        this.load.image('gi', './assets/player2.png');

        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street1').setOrigin(0, 0);
        this.text2 = this.add.text(500, 50);
        this.text2.setText(`Press left/right keys \n to move Player`);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);

        this.p1 = new Character(this, 100, 200, 'gi').setOrigin(0, 0);

    }


    update() {

        this.p1.update();

        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene7');    
        }

    }
}