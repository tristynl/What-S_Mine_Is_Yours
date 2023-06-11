class Scene7_5 extends Phaser.Scene {
    constructor() {
        super('Scene7_5');
    }

    counter = 0;
    take = 0;
    preload() {
        this.load.image('chocolate', './assets/candyshop.png');
        this.load.image('choco', './assets/objects/chocolate.png');
        this.load.image('cotto', './assets/objects/cottoncandy.png');
        this.load.image('guy75', './assets/charlie.png');
        this.load.image('guyr75', './assets/charliereflect.png');
    }

    create() {
        this.add.image(0, 0, 'chocolate').setOrigin(0, 0);

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  //interact with object
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //Interactive Images
        this.ch = this.add.image(182, 265, 'choco').setOrigin(0, 0);
        this.co = this.add.image(585, 110, 'cotto').setOrigin(0, 0);

        this.p1 = new Character(this, 100, 100, 'guy75').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 100, 'guyr75').setOrigin(0, 0);
        this.p2.setVisible(false);

        this.text = this.add.text(115, 100); //325, 435
        this.text.setText(`Hi welcome!`);

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
        
        const startButton = new Button(488, 460, '...', this, () => this.counter += 1);

         //Interactive Text
         this.text1 = this.add.text(300, 50, 'Press M to Take');
         this.text1.setVisible(false);
 
         this.text3 = this.add.text(500, 50, 'Press M to Take');
         this.text3.setVisible(false);
 
         this.cameras.main.fadeIn(1000, 0, 0, 0)
    }

    update(){
        this.p1.update();
        this.p2.update();

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            if(this.take == 0){
                if ((this.checkCollision(this.p1, this.ch)) || (this.checkCollision(this.p2, this.ch))){
                    this.ch.destroy();
                    this.text1.destroy();
                    this.take++;
                //this.kan.setVisible(false);
                } 

                if ((this.checkCollision(this.p1, this.co)) || (this.checkCollision(this.p2, this.co))){
                    this.co.destroy();
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
            if(this.checkCollision(this.p1, this.ch) || this.checkCollision(this.p2, this.ch)) {
                this.text1.setVisible(true);
            }else{
                this.text1.setVisible(false);
            }
    
            if(this.checkCollision(this.p1, this.co) || this.checkCollision(this.p2, this.co)) {
                this.text3.setVisible(true);
            }else{
                this.text3.setVisible(false);
            }
        }else{
            this.text1.setVisible(false);
            this.text3.setVisible(false);
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