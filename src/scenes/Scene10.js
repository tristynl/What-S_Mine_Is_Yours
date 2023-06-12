class Scene10 extends Phaser.Scene {
    constructor() {
        super('Scene10');
    }

    counter = 0;
    preload() {
        this.load.image('fountain', './assets/fountain.png');
        this.load.image('boy10', './assets/charliereflect.png');
        this.load.image('girl10', './assets/sam.png');
        this.load.image('textbox', './assets/textbox.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'fountain').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

       //For text
        //Lovers' dialouge
        this.textbox = this.add.image(470, 440, 'textbox').setScale(1.1, .6).scaleY=.3;
        this.textbox1 = this.add.image(150, 440, 'textbox').setScale(.6).scaleY=.3;
        this.text = this.add.text(50, 435); //325, 435
        this.text2 = this.add.text(450, 435);

        this.text2.setText(`Hey!`);


        this.p1 = new Character(this, 100, 100, 'girl10').setOrigin(0, 0);
        this.p2 = new Character(this, 600, 100, 'boy10').setOrigin(0, 0);

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
        
        const startButton = new Button(375, 460, '...', this, () => this.counter += 1);

        this.cameras.main.fadeIn(1000, 0, 0, 0)

    }

    update() {

        //this.p1.update();
        //this.p2.update();
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text2.setText(` `);
           this.text.setText(`Oh, um … hi!`);
        }
        if(this.counter == 2){
            this.text.setText(` `);
            this.text2.setText(`What’s that?`);
        }
        if(this.counter == 3){
            this.text2.setText(` `);
            this.text.setText(`I'm sorry?`);
        }
        if(this.counter == 4){
            this.text.setText(` `);
            this.text2.setText(`In your hand?`);
        }
        if(this.counter == 5){
            this.text2.setText(` `);
            this.text.setText(`I don't know it's just a\ngift for you.`);
        }
        if(this.counter == 6){
            this.text.setText(` `);
            this.text2.setText(`Oh! Well I have\nsomething for you!`);
        }
        if(this.counter == 7){
            this.text.setText(`Oh! *blush*`);
        }
        if(this.counter == 8){
            //this.text.setText(` `);
            this.text.setText(`I love it!`);
        }
        if(this.counter == 9){
            this.text.setText(` `);
            this.text2.setText(`Oh … you do?!`);
        }
        if(this.counter == 10){
            this.text2.setText(` `);
            this.text.setText(`I also got you something!`);
        }
        if(this.counter == 11){
            this.text.setText(` `);
            this.text2.setText(`Wait … really?!`);
        }
        if(this.counter == 12){
            this.text2.setText(` `);
            this.text.setText(`Surprise!`);
        }
        if(this.counter == 13){
            this.text.setText(` `);
            this.text2.setText('Wow, no one has ever gifted me \n anything before …');
        }
        if(this.counter == 14){
            this.text2.setText(` `);
            this.text.setText(`Sooo … what do you think?!`);
        }
        if(this.counter == 15){
            this.text.setText(` `);
            this.text2.setText(`I love you …`);
        }
        if(this.counter == 16){
            this.text.setText(` `);
            this.text2.setText(`WAIT. I meant I love it. \n I love IT!`);
        }
        if(this.counter == 17){
            this.text2.setText(` `);
            this.text.setText(`Aw, Charlie, I love you too!`);
        }
        if(this.counter == 18){
            this.text.setText(` `);
            this.text2.setText(`Wait … really?!`);
        }
        if(this.counter >= 18) {
            this.restartButton = new Button(370, 300, 'Restart Game', this, () => this.scene.start("menuScene"));
            this.sound.get('chill_bg').stop();

        }
        

        let endConfig = {
            fontFamily : 'Courier',
            fontSize : '28px',
            color: 'pink',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
        };

        //const restartButton = new Button(330, 350, 'Restart Game', this, () => this.scene.start("menuScene"));

        
        /* if(Phaser.Input.Keyboard.JustDown(keyR)) 
        {
            this.scene.start('menuScene');
        } */

    }
}