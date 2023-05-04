class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
        this.load.image('bedroom', './assets/bedroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom').setOrigin(0, 0);
        keyD = this.input.keyBoard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyF = this.input.keyBoard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        //if condition, if player hits the side of screen
        //this.scene.start('Scene2');
        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            text1 = this.add.text(375, 175, "Ughh why do I look like this?! ", {
                fontFamily: 'Courier',
                fontSize: '28px',
                color: 'pink',
                align: 'center',
                padding: {
                    left: 5,
                    right: 5
                }
            });
            //this.add.text("Ughh why do I look like this?! ");   
        }

        /*if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("No, no, no I can’t go out looking like this. I don’t even have an outfit yet! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("Ughh why,  why, why today?! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("It’s fine. It’s fine.  Get it together Charlie … get it together. ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start("menuScene");
        }*/
    }
}