class Credit extends Phaser.Scene {
    constructor() {
        super('CreditScene');
    }

    counter = 0;
    preload() {
        this.load.image('cred', './assets/intro2.png');
    }

    create() {
        //add background to scene
        this.add.image(0, 0, 'cred').setOrigin(0, 0);
        
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

        let tConfig = {
            fontFamily: 'Georgia',
            fontSize: '20px',
            color: 'white', //#843605
            align: 'left',
            padding: {
                top: 30,
                bottom: 30,
                left: 30,
                right: 30,
            },
            //fixedWidth: 0
        }  

        this.sound.get('chill_bg').stop();
        
        const startButton = new Button(370, 300, 'Return To Menu', this, () => this.scene.start('menuScene'));

        this.add.text(380 , 200, 'Team:\nTristyn Lai - Programmer, Task Manager \n Zac Nakamura - Writer \n Samuel Zhang - Programmer \n Kellen Zheng - 2D Artist', tConfig).setOrigin(0.5);
    }

   
}