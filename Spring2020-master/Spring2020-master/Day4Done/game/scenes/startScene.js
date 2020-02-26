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
        let treetrunk = new TreeTrunk(525,375)
        let treebranch1 = new Branch("right", -35, 20);
        let treebranch2 = new Branch("left", 35, 20);
        let treebranch3 = new Branch("right", -35, -40);
        let treebranch4 = new Branch("left", 35, -40);
        let treebranch5 = new Branch("right", -35, -100);
        let treebranch6 = new Branch("left", 35, -100);
        let treebranch7 = new Branch("right", -35, -160);
        let treebranch8 = new Branch("left", 35, -160);
        let treebranch9 = new Branch("right", -35, -220);
        let treebranch10 = new Branch("left", 35, -220);
        let treebranch11 = new Branch("right", -35, -280);
        let treebranch12 = new Branch("left", 35, -280);
        
        this.children.push(testtext);
        
        this.children.push(background)
        this.children.push(trackerBar);
        trackerBar.children.push(inputBar)
        this.children.push(axe)
        axe.children.push(axeBlade)
        this.children.push(log)
        this.children.push(treetrunk)
        treetrunk.children.push(treebranch1)
        treetrunk.children.push(treebranch2)
        treetrunk.children.push(treebranch3)
        treetrunk.children.push(treebranch4)
        treetrunk.children.push(treebranch5)
        treetrunk.children.push(treebranch6)
        treetrunk.children.push(treebranch7)
        treetrunk.children.push(treebranch8)
        treetrunk.children.push(treebranch9)
        treetrunk.children.push(treebranch10)
        treetrunk.children.push(treebranch11)
        treetrunk.children.push(treebranch12)
        background.children.push(sun)

    }
}