class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('bedroom', './assets/bedroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("I can’t wait to show them this outfit I’ve been saving! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("Hmm, what if they don’t like it … ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("I can’t wait to show them this outfit I’ve been saving! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("I can’t wait to show them this outfit I’ve been saving! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("I can’t wait to show them this outfit I’ve been saving! ");   
        }

        if(Phaser.Input.Keyboard.JustDown(keyD)) {
            this.add.text("I can’t wait to show them this outfit I’ve been saving! ");   
        }
        //if condition, if player hits the side of screen
        
        //this.scene.start('Scene2');
        /*if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start("Scene2");
        }*/
    }
}