import Behavior from "./Behavior.js"

class AxeHandleBehavior extends Behavior{
    start(){
    }
    update(){
        this.gameObject.rotation = -.6
    }
}

export default AxeHandleBehavior;