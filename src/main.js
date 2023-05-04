let config = {
    type: Phaser.CANVAS,
    width: 1500,
    height: 1000,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);