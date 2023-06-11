class Note extends Phaser.Scene {
    constructor() {
        super('SceneNote');
    }

    counter = 0;
    preload() {
        this.load.image('in1', './assets/intro1.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'in1').setOrigin(0, 0);
        
        this.text1 = this.add.text(200, 200);

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
        const startButton = new Button(370, 300, 'Click Here To Open', this, () => this.scene.start('SceneNote2'));
    }

   
}