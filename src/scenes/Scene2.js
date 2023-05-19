class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    counter = 0;
    wake = false;
    preload() {
        this.load.image('bedroom1', './assets/bedroom.png');

         //Character
         this.load.image('girl2', './assets/Player1.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
       
        //For text
        this.text3 = this.add.text(250, 435);
        this.text3.setText(`Press W to Wake Up Sam`);

    }

    update() {
       
        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.scene.start('Scene2_5'); 
        }
        
        
    }
}