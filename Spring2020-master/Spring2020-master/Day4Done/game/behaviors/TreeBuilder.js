import Base from "../../engine/Base.js"
import Branch from "../prefabs/Branch.js"
import SceneManager from "../SceneManager.js";
import GameObjects from "../GameObjects.js"
import Point from "../../engine/base/Point.js";
import TreeTrunk from "../prefabs/TreeTrunk.js";


export default class TreeBuilder extends Base.Behavior {
  peons = []

  trees = 15;
  branches = 36;

  
  start() {

    for(let i = 0; i < this.trees; i++)
    {
      //let treeScale = randomInteger(0.4, 1.1);	
      this.peons.push([]);
      let _x = 525;
      let _y = 375;
      if(i % 2 == 0)	
      {	
        _x += (i*35);	
      }	
      else{	
        _x -= (i*35);
      }	
      let treetrunk = SceneManager.instantiate(TreeTrunk, new Base.Point(_x,_y), 0)
      this.gameObject.children.push(treetrunk)
      this.peons[i].push(treetrunk)
      //treetrunk.scaleX = treeScale;	
      //treetrunk.scaleY = treeScale;	
      let branchX = 35;
      let branchY = 20;
      let branchRotate = .8;
      for(let j = 0; j < 6; j++)	
      {	
        if(j % 2 == 0){
          branchY -= ((j/2) * 60);
        }
        else{	
          branchX *= -1;
          branchRotate *= -1;
          branchY -= ((j-1)/2 * 10);
        }
        let branch = SceneManager.currentScene.instantiate(Branch, new Base.Point(branchX, branchY), branchRotate,treetrunk.children)
        treetrunk.children.push(branch)
      }	
    }
  }
}
