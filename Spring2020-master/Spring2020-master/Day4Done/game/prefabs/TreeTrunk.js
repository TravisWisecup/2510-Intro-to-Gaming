import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class TreeTrunk extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let RectangleComponent = new Components.RectangleComponent(30, 600, "Brown", "black");
    this.addComponent(RectangleComponent);

  }

}