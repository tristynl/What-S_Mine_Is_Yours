class Scene7 extends Phaser.Scene {
    constructor() {
        super('Scene7');
    }

    counter = 0;
    preload() {
        this.load.image('toy', './assets/toystore.png');
        this.load.image('plush', './assets/objects/plush.png');
        this.load.image('rp', './assets/objects/r.png');
        this.load.image('boy7', './assets/player2.png');
        //this.load.image('guys', './assets/player2.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'toy').setOrigin(0, 0);
        this.add.image(250, 280, 'plush').setOrigin(0, 0);
        this.add.image(350, 280, 'rp').setOrigin(0, 0);
        this.add.image(0, 300, 'boy7').setScale(.5).setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);  //move to next scene
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);  //open dialogue text
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  //interact with object
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(50, 300); //325, 435
        this.text2 = this.add.text(225, 410);

        this.text.setText(`Hi welcome!`);

        //For more dialouge
        this.text1 = this.add.text(270, 470);
        this.text1.setText(`Press D for More Dialouge`);

    }

    update() {


        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene8');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        /* if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.counter == 5;
        } */

        if(this.counter == 1){
           this.text.setText(` `);
           this.text2.setText(`Thanks.`);
        }
        if(this.counter == 2){
            this.text2.setText(`Oh my. There’s so much to choose from.\nI-I-I  I don’t know what to get.`);
        }
        if(this.counter == 3){
            this.text2.setText(`What if I pick something and she doesn’t like it?!`);
        }
        if(this.counter == 4){
            this.text2.setText(`Maybe it’s best if I just don’t get anything …`);
        }
        if(this.counter == 5){
            this.text2.setText(`No no I can’t show up with nothing.\nThink Charlie … think.`);
            this.text1.setText(`Press F...`);
        }
    }
}