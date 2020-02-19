import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import OrbitBehavior from "./../behaviors/OrbitBehavior.js"

export default class BackGroundDay extends Base.GameObject{
  constructor() {
    super(0,0)
    let circleComponent = new Components.CircleComponent(55, "orange", "yellow");
    let orbitBehavior = new OrbitBehavior();
    this.addComponent(circleComponent);
    this.addComponent(orbitBehavior);

  }

}