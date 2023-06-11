class Scene7_5 extends Phaser.Scene {
    constructor() {
        super('Scene7_5');
    }

    counter = 0;
    preload() {
        this.load.image('chocolate', './assets/candyshop.png');
    }

    create() {
        this.add.image(0, 0, 'chocolate').setOrigin(0, 0);
    }
}