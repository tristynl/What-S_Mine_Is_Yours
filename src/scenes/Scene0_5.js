class Scene0_5 extends Phaser.Scene {
    constructor() {
        super('Scene05');
    }

    counter = 0;
    preload() {
        this.load.image('bedroom', './assets/boybodybed.png');
        this.load.image('centextbox', './assets/centerTextBox.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'bedroom').setOrigin(0, 0);

        this.textbox = this.add.image(400, 300, 'centextbox').scaleY=0.5;
        //this.textbox.scaleX = 3;

        this.text1 = this.add.text(220, 280);
        this.text1.setText(`Throughout the Gamefeel free to use\narrow keys <-> to interact with the\nscene`);
       

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

        const startButton = new Button(380, 425, 'Click Here To Start', this, () => this.scene.start('Scene1'));

    }

    update() {
    }
}