class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }

    counter = 0;
    preload() {
        this.load.image('bathroom', './assets/bathroom.png');
        this.load.image('textbox', './assets/textbox.png');


        this.load.image('girlr', './assets/samreflect.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bathroom').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
         //For text
        this.textbox = this.add.image(260, 440, 'textbox').setScale(.4).scaleY=.3;
        this.text = this.add.text(180, 435, ' '); 
        this.text.setText(`Time to get ready!`);

        this.p1 = new Character(this, 680, 200, 'girlr').setOrigin(0, 0);

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

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }

    update() {

        this.p1.update();

    
        if(this.counter == 1){
           this.text.setText(` `);
        }

        if(this.counter >= 2){
            this.scene.start('Scene5');

        }
       
    }
}