import Base from "../../engine/Base.js"
import SceneManager from "./../SceneManager.js"

export default class OrbitBehavior extends Base.Behavior{
    time = 0;
    distance = 275;
    start(){
        
    }
    update(){
        this.time+=.01;
        
        this.gameObject.x = Math.cos(this.time)*this.distance;
        this.gameObject.y = Math.sin(this.time)*this.distance;

        if(this.time >= 6)
        {
            SceneManager.currentScene = "SceneOne";
        }
    }
}
