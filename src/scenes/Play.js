class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('bathroom', './assets/bathroom.png');
        this.load.image('bedroom', './assets/bedroom.png');
        this.load.image('staircase', './assets/staircase.png');
        this.load.image('candyshop', './assets/candyshop.png');
        this.load.image('street', './assets/street.png');
        this.load.image('street2', './assets/street2.png');
        this.load.image('toystore', './assets/toystore.png');

    }
}