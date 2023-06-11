class Scene8 extends Phaser.Scene {
    constructor() {
        super('Scene8');
    }

    counter = 0;
    preload() {
        this.load.image('street2', './assets/street2.png');
        this.load.image('girl8', './assets/sam.png');
        this.load.image('girlr8', './assets/samreflect.png');

        this.load.image('fd', './assets/flowerdoor.png');

        
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street2').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //For the Door
        this.flowerDoor = this.add.image(273, 260, 'fd').setOrigin(0, 0);

        //For person
        this.p1 = new Character(this, 150, 300, 'girl8').setScale(.5).setOrigin(0, 0);
        this.p2 = new Character(this, 150, 300, 'girlr8').setScale(.5).setOrigin(0, 0);
        this.p2.setVisible(false);


        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.text = this.add.text(260, 435);
        this.text.setText(`<-> to move around`);

        this.text1 = this.add.text(255, 245);
        this.text1.setText(`Press T to Enter`);
        this.text1.setVisible(false);

        this.cameras.main.fadeIn(1000, 0, 0, 0)

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

        if(this.checkCollision(this.p1, this.flowerDoor)) {
            this.text1.setVisible(true);
        }else{
            this.text1.setVisible(false);
        }

        if(Phaser.Input.Keyboard.JustDown(keyT) && this.checkCollision(this.p1, this.flowerDoor)){
                this.scene.start("Scene9");    
            
               
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