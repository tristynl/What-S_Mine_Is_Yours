class Girl extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        //this.points = pointValue;   // store pointValue
        this.moveSpeed = 2;
        //this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update() {
        //Move spaceship left
        this.x = this.moveSpeed * Math.sin(45);
    }
}
