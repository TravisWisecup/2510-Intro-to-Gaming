import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class Log extends Base.GameObject{
  constructor(x, y) {
    super(x, y)
    let circleComponent = new Components.CircleComponent(55, "BurlyWood", "black");
    this.addComponent(circleComponent);

  }

}