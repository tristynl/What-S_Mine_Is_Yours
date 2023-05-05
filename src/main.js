let config = {
    type: Phaser.CANVAS,
    width: 750,
    height: 500,
    scene: [Menu, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard variables
let keyLEFT, keyRIGHT, keyT, keyF, keyD, keyM, keyS, keyW; //T is start, F is nextscene, D is dialogue, M is interactivepickup

//reserve bool for edge
let edge = false;