import Scene from "./Scene.js";
import GameObject from "./GameObject.js"
import RectangleComponent from "./RectangleComponent.js"
import RectangleBehavior from "./RectangleBehavior.js";
import RectangleBehavior2 from "./RectangleBehavior2.js";
import RectComp2 from "./RectComp2.js";
import RectanlgeBehavior from "./RectangleBehavior.js";

let startScene = new Scene();
let billGameObject = new GameObject(200,200);
let billGameObject2 = new GameObject(50 ,50);

startScene.gameObjects.push(billGameObject);
startScene.gameObjects.push(billGameObject2);
let rectangle  = new RectangleComponent(100,100,"red","blue");
let rectangleBehavior = new RectangleBehavior();
billGameObject.addComponent(rectangle);
billGameObject.addComponent(rectangleBehavior);


let rectangle2 = new RectComp2(35,35,"orange","purple", 0, 50, 50);
let rectangleBehavior2 = new RectangleBehavior2();
billGameObject2.addComponent(rectangle2);
billGameObject2.addComponent(rectangleBehavior2);
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

