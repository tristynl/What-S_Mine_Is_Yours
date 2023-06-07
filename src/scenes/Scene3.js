class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }

    counter = 0;
    clothCounter = false;
    
    preload() {
        this.load.image('bedroom2', './assets/boybed.png');
        this.load.image('textbox', './assets/textbox.png');


        //Character
        this.load.image('guy', './assets/charliepj.png');
        this.load.image('guyr', './assets/charliepjreflect.png');
        this.load.image('realguy', './assets/charlie.png');
        this.load.image('realguyr', './assets/charliereflect.png');

        //Object
        this.load.image('clo', './assets/closet.png');
    }

    create() {
        //Add background to scene
        this.add.image(0, 0, 'bedroom2').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        
        //For text
        this.textbox = this.add.image(380, 440, 'textbox').scaleY=.3;
        this.text = this.add.text(210, 435, ' ',); 
        this.text.setText(`Ughh why do I look like this?!`);

        //For interactive door
        this.dr = this.add.image(570, 125, 'clo').setOrigin(0, 0);

        //For interactive text
        this.text1 = this.add.text(575, 100, 'Press SHIFT\nto change');
        this.text1.setVisible(false);

        //For person
        this.p1 = new Character(this, 100, 120, 'guy').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 120, 'guyr').setOrigin(0, 0);
        this.p3 = new Character(this, 100, 120, 'realguy').setOrigin(0, 0);
        this.p4 = new Character(this, 100, 120, 'realguyr').setOrigin(0, 0);
        this.p2.setVisible(false);
        this.p3.setVisible(false);
        this.p4.setVisible(false);

    

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
        this.p2.update();
        this.p3.update();
        this.p4.update();

        if (Phaser.Input.Keyboard.JustDown(keySHIFT)) {
            this.clothCounter = true;
            this.p3.setVisible(true);
        }

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
                if(this.p1.visible == true){
                    this.p1.setVisible(false);
                    this.p2.setVisible(true);
                }
                
                if(this.p3.visible == true){
                    this.p1.setVisible(false);
                    this.p2.setVisible(false);
                    this.p3.setVisible(false);
                    this.p4.setVisible(true);
                }
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            if(this.p2.visible == true){
                this.p1.setVisible(true);
                this.p2.setVisible(false);
            } 
            
            if(this.p4.visible == true){
                this.p1.setVisible(false);
                this.p2.setVisible(false);
                this.p4.setVisible(false);
                this.p3.setVisible(true);
            }
        }


        if(this.checkCollision(this.p1, this.dr) && this.clothCounter == false || this.checkCollision(this.p2, this.dr) && this.clothCounter == false) {
            this.text1.setVisible(true);
             }else{
            this.text1.setVisible(false);
        }

        if(this.counter == 1){
            this.text.setText(`No, no, no I can\'t go out looking like this.\nI don\'t even have an outfit yet!`);
        }
        if(this.counter == 2){
            this.text.setText(`Ughh why, why, why today?!`);
        }
        if(this.counter == 3){
            this.text.setText(`Maybe I should just tell them I\'m sick.`);
        }
        if(this.counter == 4){
            this.text.setText(`It\'s fine. It\'s fine. Get it together \nCharlie. Get it together.`);
        }

        if (this.counter > 4) {
            this.scene.start('Scene4'); 
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