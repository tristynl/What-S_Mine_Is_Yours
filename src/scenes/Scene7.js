class Scene7 extends Phaser.Scene {
    constructor() {
        super('Scene7');
    }

    counter = 0;
    preload() {
        this.load.image('toy', './assets/toystore.png');
        this.load.image('plush', './assets/objects/plush.png');
        this.load.image('rp', './assets/objects/r.png');
        this.load.image('cashier', './assets/toystore-cashier.png');
        this.load.image('guy7', './assets/charlie.png');
        this.load.image('guyr7', './assets/charliereflect.png');
        this.load.image('textbox', './assets/textbox.png');

        //this.load.image('guys', './assets/player2.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'toy').setOrigin(0, 0);
        this.add.image(30, 120, 'cashier').setScale(.5).setOrigin(0, 0);
        //this.add.image(0, 280, 'boy7').setOrigin(0, 0);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  //interact with object
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //Interactive Images
        this.kan = this.add.image(250, 190, 'plush').setOrigin(0, 0);
        this.pan = this.add.image(0, 0, 'rp').setOrigin(0, 0);

        this.textbox = this.add.image(420, 425, 'textbox').setScale(.3).scaleX=1.2;
        this.text = this.add.text(115, 100); //325, 435
        this.text2 = this.add.text(225, 410);

        this.p1 = new Character(this, 100, 100, 'guy7').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 100, 'guyr7').setOrigin(0, 0);
        this.p2.setVisible(false);
        //this.item = new Item(this, 0, 0, 'plush').setScale(.5).setOrigin(0, 0);
        //this.item1 = new Item(this, 0, 0, 'rp').setScale(.5).setOrigin(0, 0);

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

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }

    update() {

        this.p1.update();
        this.p2.update();

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            if ((this.checkCollision(this.p1, this.kan)) || (this.checkCollision(this.p2, this.kan))){
                this.kan.setVisible(false);
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

        if(this.checkCollision(this.p1, this.kan) || this.checkCollision(this.p2, this.kan)) {
            this.text1.setVisible(true);
        }else{
            this.text1.setVisible(false);
        }

        if(this.counter == 1){
           this.text.setText(` `);
           this.text2.setText(`Thanks.`);
        }
        if(this.counter == 2){
            this.text2.setText(`Oh my. There’s so much to choose from.\nI-I-I  I don’t know what to get.`);
        }
        if(this.counter == 3){
            this.text2.setText(`What if I pick something and she doesn’t like it?!`);
        }
        if(this.counter == 4){
            this.text2.setText(`Maybe it’s best if I just don’t get anything …`);
        }
        if(this.counter == 5){
            this.text2.setText(`No no I can’t show up with nothing.\nThink Charlie … think.`);
        }
        if(this.counter > 5){
            this.scene.start('Scene8');    
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