class Scene5 extends Phaser.Scene {
    constructor() {
        super('Scene5');
    }

    counter = 0;
    moveSpeed = 2;
    preload() {
        this.load.image('stairs', './assets/staircase.png');
        this.load.image('girl5', './assets/Player1.png');
        this.load.image('boys5', './assets/player2ref.png');

    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'stairs').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //const frame = this.add.image(40 + a * 2, 300, 'arrow').setAngle(a);
        this.p1 = new Girl(this, 410, 120, 'girl5').setOrigin(0,0).setScale(0.5).setAngle(20);
        this.p2 = new Boy(this, 290, 130, 'boys5').setOrigin(0,0).setScale(0.5).setAngle(-20);


        //For text
        //Lovers' dialouge
        this.text = this.add.text(50, 435); //325, 435
        this.text1 = this.add.text(450, 435);

        this.text.setText(`Breathe Charlie … breathe.`);

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
        const startButton = new Button(375, 460, '...', this, () => this.counter += 1);

        this.cameras.main.fadeIn(1000, 0, 0, 0)


    }

    update() {

        this.p1.update();
        this.p2.update();


        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text.setText(` `);
           this.text1.setText(`Calm down Sam … calm down.`);
        }
        if(this.counter == 2){
            this.text1.setText(` `);
            this.text.setText(`It’s going to go fine.`);
        }
        if(this.counter == 3){
            this.text.setText(` `);
            this.text1.setText(`You’re getting too excited.\nGet it together.`);
        }
        if(this.counter == 4){
            this.text1.setText(` `);
            this.text.setText(`It’ll all be fine. `);
        }
        if(this.counter == 5){
            this.text.setText(` `);
            this.text1.setText(`Alright, let’s go!`);
        }

        if(this.counter > 5){
            this.scene.start('Scene6');   
        }
    }
}