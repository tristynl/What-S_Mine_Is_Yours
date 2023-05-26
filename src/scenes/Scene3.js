class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom2', './assets/boybed.png');

        //Character
        this.load.image('guy', './assets/player2.png');
    }

    create() {
        //Add background to scene
        this.add.image(0, 0, 'bedroom2').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        //For text
        this.text = this.add.text(210, 435, ' ',); 
        this.text.setText(`Ughh why do I look like this?!`);

        //For person
        this.p1 = new Character(this, 100, 200, 'guy').setOrigin(0, 0);

        //Button
        let buttonConfig = {
            fontFamily: 'Georgia',
            fontSize: '20px',
            color: '#fcd9ff', //#843605
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }  
        const startButton = new Button(525, 460, '...', this, () => this.counter += 1);

        this.cameras.main.fadeIn(5000, 0, 0, 0)

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
            this.text.setText(`It\'s fine. It\'s fine. Get it together \nCharlie. Get it together.`);
        }

        if (this.counter > 4) {
            this.scene.start('Scene4'); 
        }
    }
}