import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
import BranchBehavior from "../behaviors/BranchBehavior.js";

export default class TreeTrunk extends Base.GameObject{
  constructor(branchAngle, x, y) {
    super(0,0)

    this.branchAngle = branchAngle;
    this.x = x;
    this.y = y;

    let RectangleComponent = new Components.RectangleComponent(130, 20, "DarkGreen", "black");
    this.addComponent(RectangleComponent);

    let branchBehavior = new BranchBehavior(branchAngle,x,y);
    this.addComponent(branchBehavior)
  }

}