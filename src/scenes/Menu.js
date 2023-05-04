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
            //fontSize: '28px',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        const text1 = this.add.text(375, 175, 'What\'s Mine \nIs Yours', {
            fontFamily: 'Courier',
            fontSize: '50px',
            color: 'pink',
            align: 'center',
            padding: {
                left: 5,
                right: 5
            }
        });

        const text2 = this.add.text(200, 400, 'Press T To Start', {
            fontFamily: 'Courier',
            fontSize: '40px',
            color: 'pink',
            align: 'center',
            padding: {
                left: 5,
                right: 5
            }
        });

        //Define keys
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
       // keySPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
        //this.isCool = false;
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyT)) {
            //this.sound.play('sfx_select');
            this.scene.start("Scene1");    
          }
       /* if(Phaser.InputKeyboard.JustDown(keySPACEBAR)){
            this.isCool = true;
            console.log(this.isCool);    
        }*/
    }
}