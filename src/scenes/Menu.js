class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    preload() {
        //Load background image
        this.load.image('menuBackdrop', './assets/titlescreen.png');
    }

    create() {
        this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        const text1 = this.add.text(60, 100, 'What\'s Mine Is Yours', {
            fontFamily: 'Courier',
            fontSize: '64px',
            color: 'pink',
            padding: {
                left: 5,
                right: 5
            }
        });

        const text2 = this.add.text(60, 150, 'Press Spacebar To Start', {
            fontFamily: 'Courier',
            fontSize: '32px',
            color: 'pink',
            padding: {
                left: 5,
                right: 5
            }
        });

        //Define keys
        keySPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
        this.isCool = false;
    }

    update() {
        if(Phaser.InputKeyboard.JustDown(keySPACEBAR)){
            this.isCool = true;
            console.log(this.isCool);    
        }
    }
}