class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //Load background image
        this.load.image('menuBackdrop', './assets/titlescreen.png');
        this.load.image('player', './assets/Player1.png');
        this.load.audio('chill_bg', './assets/eggtoast.mp3');
    }

    create() {
        this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);

        //play background music
        this.sound.add('chill_bg',{ loop: false, volume : 0.1 }).play();


        //add Player
        //this.p1 = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setOrigin(0.5, 0);


        let menuConfig = {
            fontFamily: 'Courier',
            //fontSize: '28px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        /* const text1 = this.add.text(375, 175, 'What\'s Mine \nIs Yours', {
            fontFamily: 'Courier',
            fontSize: '50px',
            color: 'pink',
            align: 'center',
            padding: {
                left: 5,
                right: 5
            }
        }); */

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
        const startButton = new Button(525, 380, 'Start Game', this, () => this.scene.start('Scene1'));

        //Define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
       // keySPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
        //this.isCool = false;
    }
}