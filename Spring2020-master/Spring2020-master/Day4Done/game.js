import Scene from "./Scene.js";
import GameObject from "./GameObject.js"
import RectangleComponent from "./RectangleComponent.js"
import AxeBladeComponent from "./AxeBladeComponent.js"
import CircleComponent from "./CircleComponent.js"
import SunComponent from "./SunComponent.js"
import RectangleBehavior from "./RectangleBehavior.js";
import RectangleBehavior2 from "./RectangleBehavior2.js";
import stationaryBehavior from "./stationaryBehavior.js";
import AxeHandleBehavior from "./AxeHandleBehavior.js";
import RectComp2 from "./RectComp2.js";
import RectanlgeBehavior from "./RectangleBehavior.js";
import SunBehavior from "./SunBehavior.js";

let startScene = new Scene();
let tracker = new GameObject(50 ,50);
let trackerBar = new GameObject(75,75);
let Axe = new GameObject(220,220)
let log = new GameObject(350,350)
let sunRays = new GameObject(125, 60)
let sun = new GameObject(75, 60)

startScene.gameObjects.push(tracker);
startScene.gameObjects.push(trackerBar);
startScene.gameObjects.push(Axe);
startScene.gameObjects.push(log);
startScene.gameObjects.push(sun);
startScene.gameObjects.push(sunRays);
let sunRectangle = new RectangleComponent(35, 5, "yellow", "orange")
let sunCircle = new SunComponent(55,"orange", "yellow")
let axeHandle = new RectangleComponent(175,10,"brown","black");
let axeBlade = new AxeBladeComponent(105, 3, 50, 0,  Math.PI, "gray");
let AHBehavior = new AxeHandleBehavior();
let logTop = new CircleComponent(55,"brown", "black")
let logBottom = new RectangleComponent(110,160,"brown","black")
let sunBehavior = new SunBehavior();

sun.addComponent(sunCircle)
sunRays.addComponent(sunRectangle)
Axe.addComponent(axeBlade)
Axe.addComponent(axeHandle)
Axe.addComponent(AHBehavior)
log.addComponent(logBottom)
log.addComponent(logTop)
let measureBar = new RectComp2(200,15, "red","black")
let trackerTangle = new RectComp2(35,35,"orange","purple", 0, 50, 50);
let rectangleBehavior2 = new RectangleBehavior2();
trackerBar.addComponent(measureBar)
tracker.addComponent(trackerBar);
tracker.addComponent(trackerTangle);
tracker.addComponent(rectangleBehavior2);
let currentScene = startScene;

let canv, ctx;

function main() {
    canv = document.querySelector("#canv");
    ctx = canv.getContext('2d');

    setInterval(gameLoop, 33);
}

function gameLoop() {
    update();
    draw(ctx);
}

function update() {
    currentScene.update();    
}

function draw(ctx) {
    currentScene.draw(ctx, canv.width, canv.height);
}

main();