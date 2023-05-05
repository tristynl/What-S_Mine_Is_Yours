class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom2', './assets/bedroom.png');
        //Character
        this.load.image('guy', './assets/player2.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom2').setOrigin(0, 0);
        this.text2 = this.add.text(500, 50);
        this.text2.setText(`Press left/right keys \n to move Player`);
        //console.log("We at scene 3 y'all");
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
         //For text
         this.text = this.add.text(180, 435, ' ',{
            align: 'center',
            color: 'yellow',
        }); //325, 435
        this.text1 = this.add.text(500, 470);
        this.text1.setText(`Press D for More Dialouge`);
        this.text.setText(`Ughh why do I look like this?!`);

        //For person
        this.p1 = new Character(this, 100, 200, 'guy').setOrigin(0, 0);
    }

    update() {
        
        this.p1.update();

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
            this.text.setText(`No, no, no I can\'t go out looking like this.\nI don\'t even have an outfit yet!`);
        }
        if(this.counter == 2){
            this.text.setText(`Ughh why, why, why today?!`);
        }
        if(this.counter == 3){
            this.text.setText(`Maybe I should just tell them I\'m sick.`);
        }
        if(this.counter == 4){
            this.text.setText(`It\'s fine. It\'s fine.  Get it together Charlie…\nget it together.`);
            this.text1.setText(`Press F...`)
        }

        if (Phaser.Input.Keyboard.JustDown(keyF) && this.counter >= 4) {
            this.scene.start('Scene4'); 
        }
    }
}