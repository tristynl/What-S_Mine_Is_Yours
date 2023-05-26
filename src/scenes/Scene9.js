class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

    counter = 0;
    preload() {
        this.load.image('plant', './assets/flowershop.png'); 
        this.load.image('girl9', './assets/Player1.png');
        this.load.image('rose', './assets/objects/rose.png');    
        this.load.image('succulent', './assets/objects/suc.png');  
        this.load.image('cashier1', './assets/flowershop-cashier.png');     
    }

    create() {
        //Add background to scene
        //this.add.image(50, 100, 'girl1').setOrigin(0, 0);
        this.add.image(0, 0, 'plant').setOrigin(0, 0);      
        this.add.image(0, -10, 'rose').setScale(.5).setOrigin(0.0);
        this.add.image(0, 0, 'succulent').setScale(.5).setOrigin(0, 0);
        this.add.image(0, 90, 'cashier1').setScale(.5).setOrigin(0, 0);


        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.text = this.add.text(50, 300); //325, 435
        this.text2 = this.add.text(135, 140);
        
        this.p1 = new Character(this, 50, 160, 'girl9').setOrigin(0, 0);

        this.text2.setText(`Hi welcome!`);

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

        this.cameras.main.fadeIn(5000, 0, 0, 0)

    }

    update() {

        this.p1.update();
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
            
        }

        if(this.counter == 1){
            //this.text2.setText(` `);
            this.text2.setText(`Oh wow!`);
        }
        if(this.counter == 2){
            this.text2.setText(`Ah, everything looks perfect! There’s so much to choose from!`);
        }
        if(this.counter == 3){
            this.text2.setText(`I’m already giddy thinking about picking something out for them!`);
        }
        if(this.counter > 3){
            this.scene.start('Scene10');    

        }

    }
}