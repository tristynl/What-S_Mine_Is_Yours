class Note extends Phaser.Scene {
    constructor() {
        super('SceneNote');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom', './assets/boybodybed.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom').setOrigin(0, 0);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        this.text1 = this.add.text(200, 200);
        this.text1.setText(`Throughout the Gamefeel free to use\narrow keys <-> to interact with the scene`);

        //this.player = this.physics.add.sprite(680, 200, 'player')

         //Button
         let buttonConfig = {
            fontFamily: 'Georgia',
            fontSize: '50px',
            color: 'pink', //#843605
            align: 'center',
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
            },
            //fixedWidth: 0
        }  
        const startButton = new Button(370, 300, 'Click Here To Start', this, () => this.scene.start('Scene1'));
    }

   
}