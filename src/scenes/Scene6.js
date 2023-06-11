class Scene6 extends Phaser.Scene {
    constructor() {
        super('Scene6');
    }

    //toy = false;
    //candy = false;
    preload() {
        this.load.image('street1', './assets/street.png');
        this.load.image('guy6', './assets/minicharlie.png');
        this.load.image('guyr6', './assets/minicharliereflect.png');
        this.load.image('textbox', './assets/textbox.png');

        this.load.image('td', './assets/toydoor.png');
        this.load.image('cd', './assets/chocodoor.png')

        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street1').setOrigin(0, 0);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);

         //For interactive door
        this.toyDoor = this.add.image(187, 260, 'td').setOrigin(0, 0);
        this.chocolateDoor = this.add.image(445,240, 'cd').setOrigin(0,0); 

        this.p1 = new Character(this, 100, 275, 'guy6').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 275, 'guyr6').setOrigin(0, 0);
        this.p2.setVisible(false);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

       // this.textbox = this.add.image(360, 440, 'textbox').setScale(.6).scaleY=.3;
        this.text = this.add.text(260, 435);
        this.text.setText(`<-> to move around`);


        this.cameras.main.fadeIn(1000, 0, 0, 0)

        //Interactive text
        this.text1 = this.add.text(180, 260, 'Press T to enter');
        this.text1.setVisible(false);

        this.text2 = this.add.text(500, 260, 'Press T to enter');
        this.text2.setVisible(false);

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

        if(this.checkCollision(this.p1, this.toyDoor)) {
            this.text1.setVisible(true);
        }else{
            this.text1.setVisible(false);
        }

        if(this.checkCollision(this.p1, this.chocolateDoor)) {
            this.text2.setVisible(true);
        }else{
            this.text2.setVisible(false);
        }

            /*if(this.checkCollision(this.p1, this.dr) && this.clothCounter == false || this.checkCollision(this.p2, this.dr) && this.clothCounter == false) {
                this.text1.setVisible(true);
                 }else{
                this.text1.setVisible(false);
            }*/
       // }
    //}


        if (Phaser.Input.Keyboard.JustDown(keyT) && this.checkCollision(this.p1, this.toyDoor)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene7");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyT) && this.checkCollision(this.p1, this.chocolateDoor)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene7_5");    
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