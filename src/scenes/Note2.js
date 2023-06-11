class Note2 extends Phaser.Scene {
    constructor() {
        super('SceneNote2');
    }

    counter = 0;
    preload() {
        this.load.image('in2', './assets/intro2.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'in2').setOrigin(0, 0);
        
        this.text1 = this.add.text(200, 200);
        //this.text1.setText(`Throughout the Gamefeel free to use\narrow keys <-> to interact with the scene`);

        //this.player = this.physics.add.sprite(680, 200, 'player')

         //Button
         let buttonConfig = {
            fontFamily: 'Georgia',
            fontSize: '50px',
            color: 'pink', //#843605
            align: 'center',
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
            },
            //fixedWidth: 0
        }  

        
         let tConfig = {
            fontFamily: 'Georgia',
            fontSize: '15px',
            color: 'white', //#843605
            align: 'left',
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
            },
            //fixedWidth: 0
        }  

        const startButton = new Button(380, 415, 'Click Here To Continue', this, () => this.scene.start('Scene05'));

        this.add.text(380 , 200, 'Hi Sam!\n\nI … um … have never written anyone a letter before, so\ndon’t mind me if I seem kind of new to this, but I\njust wanted to tell you how excited I am to go with you\non this date this weekend!After meeting you for the very\nfirst time the other day, I really felt like you’re someone\nthat I want and need to get to know more about. There\nare a lot of things I want to know about you.Like what\nyour favorite song is or what your favorite food is?!!\nI’m sure there are a lot of things that you\nwant to know about me as well …. I hope … Anyways,\num … I’m looking forward to seeing\nyou this weekend! You rock!\n\nBest wishes,\nCharlie :)', tConfig).setOrigin(0.5);

    }

   
}