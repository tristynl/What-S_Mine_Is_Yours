class Scene6 extends Phaser.Scene {
    constructor() {
        super('Scene6');
    }

    preload() {
        this.load.image('street1', './assets/street.png');
        this.load.image('guy6', './assets/charlie.png');
        this.load.image('guyr6', './assets/charliereflect.png');

        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'street1').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.text = this.add.text(200, 435); //325, 435
        this.text1 = this.add.text(520, 470);

        this.p1 = new Character(this, 100, 120, 'guy6').setOrigin(0, 0);
        this.p2 = new Character(this, 100, 120, 'guyr6').setOrigin(0, 0);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        this.text1 = this.add.text(260, 435);
        this.text1.setText(`Press T to Enter Store`);

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }


    update() {

        this.p1.update();

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
                //this.p1.destroy();
                //this.p2.destroy();
                this.p1.setVisible(false);
                this.p2.setVisible(false);
            //this.p4.setVisible(false);
            //this.p3.setVisible(true);

            /*if(this.checkCollision(this.p1, this.dr) && this.clothCounter == false || this.checkCollision(this.p2, this.dr) && this.clothCounter == false) {
                this.text1.setVisible(true);
                 }else{
                this.text1.setVisible(false);
            }*/
        }
    }

        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene7");    
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