let config = {
    type: Phaser.CANVAS,
    width: 750,
    height: 500,
    scene: [Menu, Scene1, Scene2]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard variables
let keyLEFT, keyRIGHT, keyT, keyF, keyD, keyS; //T is start, F is nextscene, D is dialogue, M is interactivepickup