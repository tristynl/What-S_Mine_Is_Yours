class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

    counter = 0;
    take = 0;
    preload() {
        this.load.image('plant', './assets/flowershop.png'); 
        this.load.image('girl9', './assets/sam.png');
        this.load.image('girlr9', './assets/samreflect.png');
        this.load.image('rose', './assets/objects/rose.png');    
        this.load.image('succulent', './assets/objects/suc.png');  
        this.load.image('cashier1', './assets/flowershop-cashier.png'); 
        this.load.image('textbox', './assets/textbox.png');    
    }

    create() {
        //Add background to scene
        //this.add.image(50, 100, 'girl1').setOrigin(0, 0);
        this.add.image(0, 0, 'plant').setOrigin(0, 0);      
        this.add.image(0, 90, 'cashier1').setScale(.5).setOrigin(0, 0);

        this.r = this.add.image(370, 160, 'rose').setOrigin(0.0);
        this.s = this.add.image(549, 130, 'succulent').setOrigin(0, 0);

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  //interact with object
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.text2 = this.add.text(135, 140);
        
        this.p1 = new Character(this, 50, 100, 'girl9').setOrigin(0, 0);
        this.p2 = new Character(this, 50, 100, 'girlr9').setOrigin(0, 0);
        this.p2.setVisible(false);


        this.textbox = this.add.image(370, 420, 'textbox').setScale(.9).scaleY=.3;
        this.text2.setText(`Hi welcome!`);
        this.text = this.add.text(215, 410);
        this.text.setText(`Oh wow!`);


        //Interactive Text
        this.text1 = this.add.text(300, 50, 'Press M to Take');
        this.text1.setVisible(false);

        this.text3 = this.add.text(500, 50, 'Press M to Take');
        this.text3.setVisible(false);


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

        this.cameras.main.fadeIn(1000, 0, 0, 0)

    }

    update() {

        this.p1.update();
        this.p2.update();

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            if(this.take == 0){
                if ((this.checkCollision(this.p1, this.r)) || (this.checkCollision(this.p2, this.r))){
                    this.r.destroy();
                    this.text1.destroy();
                    this.take++;
                //this.kan.setVisible(false);
                } 

                if ((this.checkCollision(this.p1, this.s)) || (this.checkCollision(this.p2, this.s))){
                    this.s.destroy();
                    this.text3.destroy();
                    this.take++;
                } 
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.p1.setVisible(false);
            this.p2.setVisible(true);
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            this.p1.setVisible(true);
            this.p2.setVisible(false);
        }

        if(this.take == 0){
            if(this.checkCollision(this.p1, this.r) || this.checkCollision(this.p2, this.r)) {
                this.text1.setVisible(true);
            }else{
                this.text1.setVisible(false);
            }
    
            if(this.checkCollision(this.p1, this.s) || this.checkCollision(this.p2, this.s)) {
                this.text3.setVisible(true);
            }else{
                this.text3.setVisible(false);
            }
            }else{
                this.text1.setVisible(false);
                this.text3.setVisible(false);
            }
        

        if(this.counter == 1){
            this.text2.setText(` `);
            this.text.setText(`Ah, everything looks perfect!\nThere’s so much to choose from!`);

        }
        if(this.counter == 2){
            this.text.setText(`I’m already giddy thinking\nabout picking something out for them!`);

        }
        if(this.counter == 3){
            this.scene.start('Scene10');    

        }
    }
    checkCollision(person, door) {
        if (person.x < door.x + door.width && 
            person.x + person.width > door.x && 
            person.y < door.y + door.height &&
            person.height + person.y > door.y) {
                return true;
        } else {
            return false;
        }
    }
}