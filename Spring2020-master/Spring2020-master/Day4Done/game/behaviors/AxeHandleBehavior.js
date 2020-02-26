import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";


export default class AxeHandleBehavior extends Base.Behavior{
    BackSwingLimit = -3.2;
    ForwardSwingLimit = .5;
    ForwardSwing = false;
    speed = .05;
    multiplier = 1;
    
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

        if (this.gameObject.rotation >= this.BackSwingLimit) {
            this.left = true;
            if(Input.keys['ArrowLeft'])
            {
                this.gameObject.rotation -= (this.speed * this.multiplier);
                if(this.gameObject.rotation < this.BackSwingLimit){
                    this.gameObject.rotation = this.BackSwingLimit;
                }
            }
            else if(Input.keys['ArrowRight'] && this.gameObject.rotation <= this.ForwardSwingLimit){
                this.gameObject.rotation += (this.speed * this.multiplier);
            }
        }
        // else if(this.gameObject.rotation <= this.BackSwingLimit){
        //     this.right = true;
        //     if(Input.keys['ArrowRight'])
        //     {
        //         this.gameObject.rotation += (this.speed * this.multiplier);
        //     }
        //     else if(this.gameObject.rotation >= this.BackSwingLimit){
        //         this.fill = "yellow";
        //     }
            
        // }

        // if(this.ForwardSwing){
        //     this.swingForward();
        // }
        // else{
        //     this.swingBack();
        // }
     
        // if(this.gameObject.rotation >= this.AxeSwingLimit + 4){
        //     this.ForwardSwing = false;
        // }
        // if(this.gameObject.rotation <= this.AxeSwingLimit){
        //     this.ForwardSwing = true;
        // }

        //this.gameObject.x = this.position;
    }
}
