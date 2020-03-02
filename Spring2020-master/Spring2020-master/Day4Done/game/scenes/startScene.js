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
        // let treetrunk = new TreeTrunk(525,375)
        // let treetrunk1 = new TreeTrunk(505,375)
        // let treetrunk2 = new TreeTrunk(545,375)
        // let treetrunk3 = new TreeTrunk(535,375)
        // let treetrunk4 = new TreeTrunk(485,375)
        // let treebranch1 = new Branch("right", -35, 20);
        // let treebranch2 = new Branch("left", 35, 20);
        // let treebranch3 = new Branch("right", -35, -40);
        // let treebranch4 = new Branch("left", 35, -40);
        // let treebranch5 = new Branch("right", -35, -100);
        // let treebranch6 = new Branch("left", 35, -100);
        // let treebranch7 = new Branch("right", -35, -160);
        // let treebranch8 = new Branch("left", 35, -160);
        // let treebranch9 = new Branch("right", -35, -220);
        // let treebranch10 = new Branch("left", 35, -220);
        // let treebranch11 = new Branch("right", -35, -280);
        // let treebranch12 = new Branch("left", 35, -280);

        // let tree1Scale = randomInteger(0.35, .8);
        // let tree2Scale = randomInteger(0.65, 1.005);
        // let tree3Scale = randomInteger(0.75, 1.015);
        // let tree4Scale = randomInteger(0.35, .8);
        // let tree5Scale = randomInteger(0.35, .8);

        let treetrunk;
        let treeBranch;
        let i;
        let j;

        for(i = 0; i < 10; i++)
        {
            let treeScale = randomInteger(0.4, 1.1);
            if(i % 2 == 0)
            {
                treetrunk = new TreeTrunk(525 + (i*5),375)
            }
            else{
                treetrunk = new TreeTrunk(525 - (i*5),375)
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
                this.children.push(treeBranch);
            }
        }

        this.children.push(testtext);
        // treetrunk.scaleX = tree1Scale;
        // treetrunk.scaleY = tree1Scale;
        // treetrunk2.scaleX = tree2Scale;
        // treetrunk2.scaleY = tree2Scale;
        // treetrunk3.scaleX = tree3Scale;
        // treetrunk3.scaleY = tree3Scale;
        // treetrunk4.scaleX = tree4Scale;
        // treetrunk4.scaleY = tree4Scale;
        // treetrunk1.scaleX = tree5Scale;
        // treetrunk1.scaleY = tree5Scale;
        this.children.push(background)
        this.children.push(trackerBar);
        trackerBar.children.push(inputBar)
        this.children.push(axe)
        axe.children.push(axeBlade)
        this.children.push(log)
        // this.children.push(treetrunk)
        // this.children.push(treetrunk1)
        // this.children.push(treetrunk2)
        // this.children.push(treetrunk3)
        // this.children.push(treetrunk4)
        // treetrunk.children.push(treebranch1)
        // treetrunk.children.push(treebranch2)
        // treetrunk.children.push(treebranch3)
        // treetrunk.children.push(treebranch4)
        // treetrunk.children.push(treebranch5)
        // treetrunk.children.push(treebranch6)
        // treetrunk.children.push(treebranch7)
        // treetrunk.children.push(treebranch8)
        // treetrunk.children.push(treebranch9)
        // treetrunk.children.push(treebranch10)
        // treetrunk.children.push(treebranch11)
        // treetrunk.children.push(treebranch12)
        // treetrunk1.children.push(treebranch1)
        // treetrunk1.children.push(treebranch2)
        // treetrunk1.children.push(treebranch3)
        // treetrunk1.children.push(treebranch4)
        // treetrunk1.children.push(treebranch5)
        // treetrunk1.children.push(treebranch6)
        // treetrunk1.children.push(treebranch7)
        // treetrunk1.children.push(treebranch8)
        // treetrunk1.children.push(treebranch9)
        // treetrunk1.children.push(treebranch10)
        // treetrunk1.children.push(treebranch11)
        // treetrunk1.children.push(treebranch12)
        // treetrunk2.children.push(treebranch1)
        // treetrunk2.children.push(treebranch2)
        // treetrunk2.children.push(treebranch3)
        // treetrunk2.children.push(treebranch4)
        // treetrunk2.children.push(treebranch5)
        // treetrunk2.children.push(treebranch6)
        // treetrunk2.children.push(treebranch7)
        // treetrunk2.children.push(treebranch8)
        // treetrunk2.children.push(treebranch9)
        // treetrunk2.children.push(treebranch10)
        // treetrunk2.children.push(treebranch11)
        // treetrunk2.children.push(treebranch12)
        // treetrunk3.children.push(treebranch1)
        // treetrunk3.children.push(treebranch2)
        // treetrunk3.children.push(treebranch3)
        // treetrunk3.children.push(treebranch4)
        // treetrunk3.children.push(treebranch5)
        // treetrunk3.children.push(treebranch6)
        // treetrunk3.children.push(treebranch7)
        // treetrunk3.children.push(treebranch8)
        // treetrunk3.children.push(treebranch9)
        // treetrunk3.children.push(treebranch10)
        // treetrunk3.children.push(treebranch11)
        // treetrunk3.children.push(treebranch12)
        // treetrunk4.children.push(treebranch1)
        // treetrunk4.children.push(treebranch2)
        // treetrunk4.children.push(treebranch3)
        // treetrunk4.children.push(treebranch4)
        // treetrunk4.children.push(treebranch5)
        // treetrunk4.children.push(treebranch6)
        // treetrunk4.children.push(treebranch7)
        // treetrunk4.children.push(treebranch8)
        // treetrunk4.children.push(treebranch9)
        // treetrunk4.children.push(treebranch10)
        // treetrunk4.children.push(treebranch11)
        // treetrunk4.children.push(treebranch12)
        background.children.push(sun)

        function randomInteger(min, max) {
            return (Math.random() * (min - max) + max)
        }

    }
    
}