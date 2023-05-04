class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

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
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            console.log("Good for you bro");
            //this.scene.start('Scene5');    
        }

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
            this.text1.setText(`Press D for monologue`);
        }

        if(this.counter == 1){
           this.text.setText(`I can’t wait to show them this \n outfit I’ve been saving! `);
        }
        if(this.counter == 2){
            this.text.setText(`Hmm, what if they don’t like it …`);
        }
        if(this.counter == 3){
            this.text.setText(`Nahhh, they’re going to love it! `);
        }
        if(this.counter == 4){
            this.text.setText(`Ahh I have so many questions for them. `);
        }
        if(this.counter == 5){
            this.text.setText(` I wonder what their favorite food is? `);
        }
        if(this.counter == 6){
            this.text.setText(`I hope they like sushi. I’ve been dreaming \n about sushi dates with them.`);
        }
    }
}