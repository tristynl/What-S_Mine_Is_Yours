class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom', './assets/boybodybed.png');
        this.load.image('textbox', './assets/textbox.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom').setOrigin(0, 0);
        this.textbox = this.add.image(380, 440, 'textbox').setScale(.6).scaleY=.3;
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text1 = this.add.text(260, 435);
        this.text1.setText(`Press F to Wake Up Charlie`);

        //this.player = this.physics.add.sprite(680, 200, 'player')

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }

    update() {
        //this.bedroom.tilePositionX += 1;
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.counter += 1;
            //this.scene.start('Scene2');    
        }
        
        if (this.counter == 1){
            this.text1.setText(`Press F to Try Harder`);  
        }
        if(this.counter == 2){
            this.text1.setText(`...Press F Again`);
        }
        if(this.counter == 3){
            this.scene.start('Scene2');     
        }
    }
}