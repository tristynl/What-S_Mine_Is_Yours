class Boy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speed) {
        super(scene, x, y, texture, frame);
        //scene.add.existing(this);   // add to existing scene
        //this.points = pointValue;   // store pointValue
        this.moveSpeed = speed;
        //this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update() {
        //Move spaceship left
        this.x -= this.moveSpeed;
    }
}