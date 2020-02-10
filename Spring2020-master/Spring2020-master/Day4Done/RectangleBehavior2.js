import Behavior from "./Behavior.js"

class RectangleBehavior2 extends Behavior{

    start(){
        this.gameObject.speed = 0;
    }

    countUp()
    {
        this.count++;
        if(this.count % 50 == 0)
        {
            this.count = 0;
            this.moveLeft = !this.moveLeft;
        }
    }


    moveLeft = false;
    count = 0;

    update(){
        this.gameObject.speed = 1;
        this.countUp();
        if(!this.moveLeft)
        {
            this.gameObject.x += this.gameObject.speed;
        }
        else{
            this.gameObject.x -= this.gameObject.speed;
        }
    }
}

export default RectangleBehavior2;