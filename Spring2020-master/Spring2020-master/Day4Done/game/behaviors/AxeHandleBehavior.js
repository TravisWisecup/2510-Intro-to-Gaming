import Base from "../../engine/Base.js"

export default class AxeHandleBehavior extends Base.Behavior{
    AxeSwingLimit = -3.2;
    ForwardSwing = false;
    
    start(){
        
    }
    swingBack()
    {
        this.gameObject.rotation -= .2
    }
    swingForward()
    {
        this.gameObject.rotation += .3
    }
    update(){
        if(this.ForwardSwing){
            this.swingForward();
        }
        else{
            this.swingBack();
        }
     
        if(this.gameObject.rotation >= this.AxeSwingLimit + 4){
            this.ForwardSwing = false;
        }
        if(this.gameObject.rotation <= this.AxeSwingLimit){
            this.ForwardSwing = true;
        }

        //this.gameObject.x = this.position;
    }
}
