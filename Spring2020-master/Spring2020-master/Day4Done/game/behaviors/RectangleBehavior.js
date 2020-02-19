import Behavior from "./Behavior.js"

class RectanlgeBehavior extends Behavior{
    start(){
        this.gameObject.rotation = 0;
    }
    update(){
        this.gameObject.rotation += .04;
    }
}

export default RectanlgeBehavior;