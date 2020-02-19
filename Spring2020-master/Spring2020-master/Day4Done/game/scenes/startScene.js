import Base from "../../engine/Base.js";
import Axe from "../prefabs/Axe.js";
import AxeBlade  from "../prefabs/AxeBlade.js";
import BackGroundDay from "../prefabs/BackGroundDay.js";
import DaySky from "../prefabs/DaySky.js";
import Log from "../prefabs/Log.js";
import Sun from "../prefabs/Sun.js";
import Moon from "../prefabs/Moon.js";
import OscillatingCircle from "../prefabs/OscillatingCircle.js";
import TextTimer from "../prefabs/TextTimer.js";
import TrackerBar from "../prefabs/TrackerBar.js"

export default class startScene extends Base.Scene {
    constructor() {
        super();

        let trackerBar = new TrackerBar(260, 50);
        let axe = new Axe(220, 220)
        let axeBlade = new AxeBlade();
        let log = new Log(350, 350)
        let sun = new Sun()
        //let moon = new GameObject(140, 75)
        let background = new BackGroundDay(300, 300)
        
        this.children.push(background)
        this.children.push(trackerBar);
        this.children.push(axe)
        axe.children.push(axeBlade)
        this.children.push(log)
        background.children.push(sun)


        // startScene.gameObjects.push(background);
        // startScene.gameObjects.push(tracker);
        // startScene.gameObjects.push(trackerBar);
        // startScene.gameObjects.push(log);
        // startScene.gameObjects.push(Axe);
        // startScene.gameObjects.push(sun);
        // startScene.gameObjects.push(moon);
        // startScene.gameObjects.push(sunRays);
        // let backgroundMidday = new RectangleComponent(800, 900, "DarkCyan")
        // let backgroundNight = new RectangleComponent(800, 900, "")
        // let backgroundSky = new RectangleComponent(800, 900, "cyan")
        // let backgroundEarth = new RectangleComponent(800, 200, "green")
        // let sunCircle = new CircleComponent(55, "orange", "yellow")
        // let moonCircle = new SunComponent(55, "white", "black")
        // let axeHandle = new RectangleComponent(175, 10, "brown", "black");
        // let axeBlade = new AxeBladeComponent(105, 3, 50, 0, Math.PI, "gray");
        // let AHBehavior = new AxeHandleBehavior();
        // let logTop = new CircleComponent(55, "BurlyWood", "black")
        // let logBottom = new RectangleComponent(160, 180, "Sienna", "black")
        // let sunBehavior = new SunBehavior();

        // background.addComponent(backgroundSky)
        // background.addComponent(backgroundEarth)
        // sun.addComponent(sunCircle)
        // moon.addComponent(moonCircle)
        // log.addComponent(logBottom)
        // log.addComponent(logTop)
        // Axe.addComponent(axeBlade)
        // Axe.addComponent(axeHandle)
        // Axe.addComponent(AHBehavior)
        // let measureBar = new RectComp2(200, 15, "red", "black")
        // let trackerTangle = new RectComp2(10, 35, "orange", "purple", 0, 50, 50);
        // let rectangleBehavior2 = new RectangleBehavior2();
        // trackerBar.addComponent(measureBar)
        // tracker.addComponent(trackerTangle);
        // tracker.addComponent(rectangleBehavior2);
    }
}