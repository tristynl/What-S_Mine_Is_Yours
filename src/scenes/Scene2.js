class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    counter = 0;
    wake = false;
    preload() {
        this.load.image('bedroom1', './assets/girlbed.png');
        this.load.image('textbox', './assets/textbox.png');

         //Character
         this.load.image('girl2', './assets/Player1.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
       
        //For text
        this.textbox = this.add.image(360, 435, 'textbox').setScale(.6).scaleY=.3;
        this.text3 = this.add.text(250, 435);
        this.text3.setText(`Press W to Wake Up Sam`);

        this.cameras.main.fadeIn(1000, 0, 0, 0)

    }

    update() {
       
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.start('Scene2_5'); 
        }
        
        
    }
}