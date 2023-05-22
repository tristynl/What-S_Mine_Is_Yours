// Character prefab
class Girl extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        //this.isMoving = false;
        this.moveSpeed = 2;
        //edge = false;
    }


    update() {
       
        //this.y -= this.moveSpeed;  
    }
}