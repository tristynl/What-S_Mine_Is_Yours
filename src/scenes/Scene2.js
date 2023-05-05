class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    counter = 0;
    wake = false;
    preload() {
        this.load.image('bedroom1', './assets/bedroom.png');

         //Character
         this.load.image('girl', './assets/player1.png');
         this.load.image('girlr', './assets/player1ref.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        console.log("We at scene 2 y'all");
        this.text2 = this.add.text(500, 50);
        this.text2.setText(`Press left/right keys \n to move Player`);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //For person
        this.p1 = new Character(this, 100, 200, 'girl').setOrigin(0, 0);

        //this.p1 = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'girl').setOrigin(0, 0);


        //For text
        this.text3 = this.add.text(250, 250);
        this.text3.setText(`Press W to Wake Up Sam`);
        this.text = this.add.text(200, 435, ' ',{
            align: 'center',
            color: 'pink',
        }); //325, 435
        this.text1 = this.add.text(500, 470);
        
    }

    update() {
       
        this.p1.update();

        if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.text3.setText(` `);
            this.text1.setText(`Press D for More Dialogue`);
            this.text.setText(`I can’t wait to show them this \n outfit I’ve been saving!`);  
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text.setText(`Hmm, what if they don’t like it …`);
        }
        if(this.counter == 2){
            this.text.setText(`Nahhh, they’re going to love it! `);
        }
        if(this.counter == 3){
            this.text.setText(`Ahh I have so many questions for them. `);
        }
        if(this.counter == 4){
            this.text.setText(`I wonder what their favorite food is? `);
        }
        if(this.counter == 5){
            this.text.setText(`I hope they like sushi. I’ve been dreaming \n about sushi dates with them.`);
            this.text1.setText(`Press F...`)
        }

        if (Phaser.Input.Keyboard.JustDown(keyF) && this.counter >= 5) {
            this.scene.start('Scene3'); 
        }

    }
}