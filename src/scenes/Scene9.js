class Scene9 extends Phaser.Scene {
    constructor() {
        super('Scene9');
    }

    counter = 0;
    preload() {
        this.load.image('plant', './assets/objects/fucker.png'); 
        //this.load.image('rose', './assets/objects/rose.png');    
        //this.load.image('s', './assets/objects/suc.png');         //this.load.image('candyCane', './assets/objects/candy_cane.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'plant').setOrigin(0, 0);       // this.add.image(250, 280, 'rose').setOrigin(0, 0);
        //this.add.image(350,280 , 's').setOrigin(0.0);
        //this.add.image(280, 438, 'candyCane').setOrigin(0, 0);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.text = this.add.text(50, 300); //325, 435
        this.text2 = this.add.text(100, 410);

        this.text2.setText(`Hi welcome!`);

        //For more dialouge
        this.text1 = this.add.text(270, 470);
        this.text1.setText(`Press D for More Dialouge`);
    }

    update() {
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
            
        }

        if(this.counter == 1){
            //this.text2.setText(` `);
            this.text2.setText(`Oh wow!`);
        }
        if(this.counter == 2){
            this.text2.setText(`Ah, everything looks perfect! There’s so much to choose from!`);
        }
        if(this.counter == 3){
            this.text2.setText(`I’m already giddy thinking about picking something out for them!`);
        }
        if(this.counter == 4){
            this.text1.setText(`Press F...`)
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyF) && this.counter >=4) {
            this.scene.start('Scene10');    
        }

    }
}