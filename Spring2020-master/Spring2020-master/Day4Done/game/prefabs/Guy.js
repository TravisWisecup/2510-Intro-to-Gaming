import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class Guy extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let RectangleComponent = new Components.RectangleComponent(175, 10, "brown", "black");
    this.addComponent(RectangleComponent);

  }

}