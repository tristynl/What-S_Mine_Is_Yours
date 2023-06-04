// Character prefab
class Girl extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        //this.isMoving = false;
        this.moveSpeed = 1;
        //edge = false;
    }


    update() {
        this.direction = new Phaser.Math.Vector2(0);
        //right/down movement only for staircase
        if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.direction.x = 1;
            this.x += this.moveSpeed;
        } 
        /* else if(keyLEFT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.direction.x = -1;
            this.x -= this.moveSpeed;
        }
        if(keyUP.isDown) {
            this.direction.y = -1;
            this.y -= this.moveSpeed;
        } */
        else if(keyDOWN.isDown && this.y <= game.config.width - borderUISize - this.height) {
            this.direction.y = 1;
            this.y += this.moveSpeed;
        }
       
        x = this.x;
        y = this.y;
        //this.y -= this.moveSpeed;  
    }
}