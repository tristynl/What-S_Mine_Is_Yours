class Scene10 extends Phaser.Scene {
    constructor() {
        super('Scene10');
    }

    counter = 0;
    preload() {
        this.load.image('fountain', './assets/fountain.png');
        //this.load.image('candyCane', './assets/objects/candy_cane.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'fountain').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

       //For text
        //Lovers' dialouge
        this.text = this.add.text(50, 435); //325, 435
        this.text2 = this.add.text(450, 435);

        this.text2.setText(`Hey!`);

        //For more dialouge
        this.text1 = this.add.text(270, 470);
        this.text1.setText(`Press D for More Dialouge`);
    }

    update() {
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
        }

        if(this.counter == 1){
           this.text2.setText(` `);
           this.text.setText(`Oh, um … hi!`);
        }
        if(this.counter == 2){
            this.text.setText(` `);
            this.text2.setText(`What’s that?`);
        }
        if(this.counter == 3){
            this.text2.setText(` `);
            this.text.setText(`I'm sorry?`);
        }
        if(this.counter == 4){
            this.text.setText(` `);
            this.text2.setText(`In your hand?`);
        }
        if(this.counter == 5){
            this.text.setText(` `);
            this.text.setText(`I don't know it's just a\ngift for you.`);
            this.text2.setText(`Press F...`);
        }
        if(this.counter == 6){
            this.text.setText(` `);
            this.text2.setText(`Oh! Well I have\nsomething for you!`);
        }
        if(this.counter == 7){
            //this.text.setText(` `);
            this.text.setText(`Oh! *blush*`);
            this.text1.setText(`Press F... for to be continued`);
            
        }
        
        if(Phaser.Input.Keyboard.JustDown(keyR)) 
        {
            this.scene.start('menuScene');
        }

    }
}