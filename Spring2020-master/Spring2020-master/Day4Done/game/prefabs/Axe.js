import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import AxeHandleBehavior from "../behaviors/AxeHandleBehavior.js";

export default class Axe extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let RectangleComponent = new Components.RectangleComponent(175, 10, "brown", "black");
    let AHBehavior = new AxeHandleBehavior();
    this.addComponent(RectangleComponent);
    this.addComponent(AHBehavior);

  }

}