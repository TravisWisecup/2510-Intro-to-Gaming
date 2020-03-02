import Base from "../../engine/Base.js";
import Axe from "../prefabs/Axe.js";
import AxeBlade  from "../prefabs/AxeBlade.js";
import BackGroundDay from "../prefabs/BackGroundDay.js";
import DaySky from "../prefabs/DaySky.js";
import Log from "../prefabs/Log.js";
import Sun from "../prefabs/Sun.js";
import TextTimer from "../prefabs/TextTimer.js";
import Moon from "../prefabs/Moon.js";
import OscillatingCircle from "../prefabs/OscillatingCircle.js";
import TrackerBar from "../prefabs/TrackerBar.js"
import InputBar from "../prefabs/InputBar.js"
import TreeTrunk from "../prefabs/TreeTrunk.js";
import Branch from "../prefabs/Branch.js";

export default class startScene extends Base.Scene {
    constructor() {
        super();

        let testtext = new TextTimer(75, 75)

        let trackerBar = new TrackerBar(260, 50);
        let inputBar = new InputBar()
        let axe = new Axe(220, 220)
        let axeBlade = new AxeBlade();
        let log = new Log(350, 350)
        let sun = new Sun()
        //let moon = new GameObject(140, 75)
        let background = new BackGroundDay(350, 400)


        let treetrunk;
        let treeBranch;
        let i;
        let j;



        this.children.push(testtext);

        this.children.push(background)

        for(i = 0; i < 10; i++)
        {
            let treeScale = randomInteger(0.4, 1.1);
            if(i % 2 == 0)
            {
                treetrunk = new TreeTrunk(525 + (i*15),375)
            }
            else{
                treetrunk = new TreeTrunk(525 - (i*15),375)
            }
            treetrunk.scaleX = treeScale;
            treetrunk.scaleY = treeScale;
            this.children.push(treetrunk);
            for(j = 0; j < 12; j++)
            {
                if(i % 2 == 0)
                    treeBranch = new Branch("left", 35, 20 - (j * 60))
                else{
                    treeBranch = new Branch("right", 35, 20 - (j * 60))
                }
                treetrunk.children.push(treeBranch);
            }
        }
        this.children.push(trackerBar);
        trackerBar.children.push(inputBar)
        this.children.push(axe)
        axe.children.push(axeBlade)
        this.children.push(log)

        background.children.push(sun)

        function randomInteger(min, max) {
            return (Math.random() * (min - max) + max)
        }

    }
    
}