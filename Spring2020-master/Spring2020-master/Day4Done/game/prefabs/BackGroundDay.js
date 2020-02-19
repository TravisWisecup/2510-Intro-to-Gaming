import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class BackGroundDay extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let RectangleComponent = new Components.RectangleComponent(800, 200, "green");
    this.addComponent(RectangleComponent);

  }

}