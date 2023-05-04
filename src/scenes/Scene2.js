class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom1', './assets/bedroom.png');
        
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom1').setOrigin(0, 0);
        console.log("We at scene 2 y'all");
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //For text
        this.text = this.add.text(325, 435);
        this.text1 = this.add.text(520, 470);
    }

    update() {
       
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.sound.play('sfx_select');
            this.scene.start('Scene3');     
        }
        
        if (Phaser.Input.Keyboard.JustDown(keyD)) {
            this.counter += 1;
            this.text1.setText(`Move it along`);
            //this.add.text(30, 30, 'Let em cook bruh');
            //console.log("Come on brotha");        
        }

        if(this.counter == 1){
           this.text.setText(`Let em cook`);
            //this.add.text(30, 30, 'Let em cook bruh'); 
        }
        if(this.counter == 2){
            this.text.setText(`Come on bro`);
            //this.add.text(30, 30, 'Deez nutz');     
        }
        //Just keep doing if statements 
    }
}