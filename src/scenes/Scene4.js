class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }

    counter = 0;
    preload() {
        this.load.image('bathroom', './assets/bathroom.png');
        this.load.image('textbox', './assets/textbox.png');

        this.load.image('girl4', './assets/sam.png');
        this.load.image('girlr4', './assets/samreflect.png');
        
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

        this.p1 = new Character(this, 100, 120, 'girl4').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 120, 'girlr4').setOrigin(0, 0);
        this.p2.setVisible(false);

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

        this.text1 = this.add.text(180, 200, 'Press Shift to Get Ready'); 
        this.text1.setVisible(false);


    }

    update() {

        this.p1.update();
        this.p2.update();

        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.p1.setVisible(false);
            this.p2.setVisible(true);
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            this.p1.setVisible(true);
            this.p2.setVisible(false);
        }

        /*if(this.checkCollision(this.p1, this.dr) && this.clothCounter == false || this.checkCollision(this.p2, this.dr) && this.clothCounter == false) {
            this.text1.setVisible(true);
             }else{
            this.text1.setVisible(false);
        }*/

        if(this.counter == 1){
           this.text.setText(` `);
           this.textbox.setVisible(false);
        }

        if(this.counter >= 2){
            this.scene.start('Scene5');

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