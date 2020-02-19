import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class BackGroundDay extends Base.GameObject{
  constructor() {
    super(0,0)
    let rectangleComponent = new Components.RectangleComponent(800, 900, "cyan");
    this.addComponent(rectangleComponent);

  }

}