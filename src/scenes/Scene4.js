class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }

    counter = 0;
    preload() {
        this.load.image('bathroom', './assets/bathroom.png');

        this.load.image('girlr', './assets/player1ref.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bathroom').setOrigin(0, 0);
        this.text2 = this.add.text(500, 50);
        this.text2.setText(`Press left/right keys \n to move Player`);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
         //For text
        this.text = this.add.text(180, 435, ' '); 
        this.text1 = this.add.text(500, 470);
        this.text1.setText(`Press D for More Dialouge`);
        this.text.setText(`Time to get ready!`);

        this.p1 = new Character(this, 680, 200, 'girlr').setOrigin(0, 0);

    }

    update() {

        this.p1.update();

        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text.setText(`Press F`);
        }
       
        if(Phaser.Input.Keyboard.JustDown(keyF)){
            this.scene.start('Scene5');

        }
        /*if (Phaser.Input.Keyboard.JustDown(keyF) && this.counter >= 1) {
            this.scene.start('Scene5');    
        }*/
    }
}