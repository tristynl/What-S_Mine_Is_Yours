class Scene2_5 extends Phaser.Scene {
    constructor() {
        super('Scene2_5');
    }

    counter = 0;
    wake = false;
    preload() {
        this.load.image('bedroom1', './assets/bedroom.png');
        this.load.image('textbox', './assets/textbox.png');


         //Character
         this.load.image('girl2', './assets/Player1.png');

         this.load.image('tBox', './assets/textbox.png');

        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //Character
        this.p1 = new Character(this, 200, 200, 'girl2').setOrigin(0, 0);

        //For text
        this.textbox = this.add.image(370, 440, 'textbox').setScale(.3).scaleX=1;
        this.text = this.add.text(210, 435, ' ',); //325, 435

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

        //this.add.image(0, 300, 'tBox').setOrigin(0, 0).setScale(.5);
        
        const startButton = new Button(488, 460, '...', this, () => this.counter += 1);
        this.text.setText(`I can’t wait to show them this \n outfit I’ve been saving!`);  

        this.input.keyboard.once(startButton, () => {
            // fade to black
            this.cameras.main.fadeOut(5000, 0, 0, 0)
        })
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('Scene3');
        })


    }

    update() {
       
        this.p1.update();


        if(this.counter == 1){
            this.text.setText(`Hmm, what if they don’t like it …`);
        }
        if(this.counter == 2){
            this.text.setText(`Nahhh, they’re going to love it! `);
        }
        if(this.counter == 3){
            this.text.setText(`Ahh I have so many questions for them. `);
        }
        if(this.counter == 4){
            this.text.setText(`I wonder what their favorite food is? `);
        }
        if(this.counter == 5){
            this.text.setText(`I hope they like sushi. I’ve been dreaming \nabout sushi dates with them.`);
        }

        if (this.counter > 5) {
            this.scene.start('Scene3'); 
        }
    }
}