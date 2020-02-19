import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class Axe extends Base.GameObject{
  constructor() {
    super(0,0)
    let circleComponent = new Components.AxeBladeComponent(105, 3, 50, 0, Math.PI, "gray");
    this.addComponent(circleComponent);

  }

}