// Character prefab
class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isMoving = false;
        this.moveSpeed = 2;
    }

    update() {
        if(!this.isMoving) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
    }

    reset() {
        this.isMoving = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}