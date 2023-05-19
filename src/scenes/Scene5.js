class Scene5 extends Phaser.Scene {
    constructor() {
        super('Scene5');
    }

    counter = 0;
    preload() {
        this.load.image('stairs', './assets/staircase.png');
        this.load.image('girl5', './assets/Player1.png');
        this.load.image('boy5', './assets/player2ref.png');

    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'stairs').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.text2 = this.add.text(500, 50);
        this.text2.setText(`Press left/right keys \n to move Player`);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.p1 = new Character(this, 150, 100, 'girl5').setScale(.5).setOrigin(0, 0);
        this.p2 = new Character(this, 450, 100, 'boy5').setScale(.5).setOrigin(0, 0);

        //For text
        //Lovers' dialouge
        this.text = this.add.text(50, 435); //325, 435
        this.text2 = this.add.text(450, 435);

        this.text.setText(`Breathe Charlie … breathe.`);

        //For more dialouge
        this.text1 = this.add.text(270, 470);
        this.text1.setText(`Press D for More Dialouge`);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //console.log("Good for you bro");
            this.scene.start('Scene6');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text.setText(` `);
           this.text2.setText(`Calm down Sam … calm down.`);
        }
        if(this.counter == 2){
            this.text2.setText(` `);
            this.text.setText(`It’s going to go fine.`);
        }
        if(this.counter == 3){
            this.text.setText(` `);
            this.text2.setText(`You’re getting too excited.\nGet it together.`);
        }
        if(this.counter == 4){
            this.text2.setText(` `);
            this.text.setText(`It’ll all be fine. `);
        }
        if(this.counter == 5){
            this.text.setText(` `);
            this.text2.setText(`Alright, let’s go!`);
            this.text1.setText(`Press F...`);
        }
    }
}