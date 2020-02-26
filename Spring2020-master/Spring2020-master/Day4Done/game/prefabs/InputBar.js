import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import InputBarBehavior from "../behaviors/InputBarBehavior.js"

export default class TrackerBar extends Base.GameObject{
  constructor() {
    super(-100,0)
    let RectangleComponent = new Components.RectangleComponent(8, 40, "black", "black");
    this.addComponent(RectangleComponent);
    let inputBarBehavior = new InputBarBehavior();
    this.addComponent(inputBarBehavior)

  }

}