class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

    counter = 0;
    preload() {
        this.load.image('candy', './assets/candyshop.png');
        this.load.image('candyCane', './assets/objects/candy_cane.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'candy').setOrigin(0, 0);
        this.add.image(280, 438, 'candyCane').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(50, 435); //325, 435
        this.text2 = this.add.text(450, 435);

        this.text.setText(`Hi welcome!`);

        //For more dialouge
        this.text1 = this.add.text(270, 470);
        this.text1.setText(`Press D for More Dialouge`);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            console.log("Good for you bro");
            //this.scene.start('Scene5');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

    
    }
}