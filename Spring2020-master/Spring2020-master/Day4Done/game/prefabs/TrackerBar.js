import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class TrackerBar extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let RectangleComponent = new Components.RectangleComponent(200, 15, "red", "black");
    this.addComponent(RectangleComponent);

  }

}