class Scene7 extends Phaser.Scene {
    constructor() {
        super('Scene7');
    }

    preload() {
        this.load.image('toy', './assets/toystore.png');
        this.load.image('plush', './assets/objects/bunny.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'toy').setOrigin(0, 0);
        this.add.image(250, 280, 'plush').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);  //move to next scene
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);  //open dialogue text
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  //interact with object
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.scene.start('Scene8');    
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