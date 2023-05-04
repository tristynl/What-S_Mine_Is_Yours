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
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        //implement scrolling
        //this.bedroom = this.add.tileSprite(0, 0, 750, 500, 'bedroom').setOrigin(0,0).setScrollFactor(0, 1);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);
    }

    update() {
        //this.bedroom.tilePositionX += 1;
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.sound.play('sfx_select');
            this.scene.start('Scene2');    
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
            this.text1.setText(`Press D for monologue`);
        }

        if(this.counter == 1){
           this.text.setText(`Ughh why do I look like this?! `);
        }
        if(this.counter == 2){
            this.text.setText(`No, no, no I can’t go out looking like this. \n I don’t even have an outfit yet! `);
        }
        if(this.counter == 3){
            this.text.setText(`Ughh why,  why, why today?! `);
        }
        if(this.counter == 4){
            this.text.setText(`Maybe I should just tell them I’m sick. `);
        }
        if(this.counter == 5){
            this.text.setText(`It’s fine. It’s fine.  \n Get it together Charlie … get it together.  `);
        }
    }
}