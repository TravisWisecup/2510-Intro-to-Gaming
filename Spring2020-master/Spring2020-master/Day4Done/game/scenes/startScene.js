
// let log = new Log(350, 350)
// //let moon = new GameObject(140, 75)
// let treetrunk;
// let treeBranch;
// let i;
// let j;


// this.children.push(log)


// function randomInteger(min, max) {
//     return (Math.random() * (min - max) + max)
// }

export default {
    name: "startScene",
    objects : [
      {
        name:"testtext",
        location: {x:75, y:75},
        type:'TextTimer',
      },
      {
        name:"background",
        location: {x:350, y:400},
        type:'BackGroundDay',
        children:[
            {
                name:"sun",
                location: {x:0, y:0},
                type:'Sun',
            },
          ]
      },
      {
        name:"log",
        location: {x:350, y:350},
        type:'Log',
      },
      {
        name:"axe",
        location: {x:220, y:220},
        type:'Axe',
        children:[
            {
                name:"axeBlade",
                location: {x:0, y:0},
                type:'AxeBlade',
            },
          ]
      },
      {
        name:"trackerBar",
        location: {x:260, y:50},
        type:'TrackerBar',
        children:[
          {
            name:"inputBar",
            location: {x:-100, y:0},
            type:'InputBar',
          }
        ]
      }
    ]
  }


// export default class startScene extends Base.Scene {
//     constructor() {
//         super();

//         let testtext = new TextTimer(75, 75)

//         let trackerBar = new TrackerBar(260, 50);
//         let inputBar = new InputBar()
//         let axe = new Axe(220, 220)
//         let axeBlade = new AxeBlade();
//         let log = new Log(350, 350)
//         let sun = new Sun()
//         //let moon = new GameObject(140, 75)
//         let background = new BackGroundDay(350, 400)
//         let treetrunk;
//         let treeBranch;
//         let i;
//         let j;


        
//         this.children.push(testtext);
        
//         this.children.push(background)

//         for(i = 0; i < 10; i++)	
//         {	
//             let treeScale = randomInteger(0.4, 1.1);	
//             if(i % 2 == 0)	
//             {	
//                 treetrunk = new TreeTrunk(525 + (i*15),375)	
//             }	
//             else{	
//                 treetrunk = new TreeTrunk(525 - (i*15),375)	
//             }	
//             treetrunk.scaleX = treeScale;	
//             treetrunk.scaleY = treeScale;	
//             this.children.push(treetrunk);	
//             for(j = 0; j < 36; j++)	
//             {	
//                 if(j % 2 == 0)	
//                     treeBranch = new Branch("left", 35, 20 - ((j/2) * 20))	
//                 else{	
//                     treeBranch = new Branch("right", -35, 20 - ((j - 1)/2 * 20))	
//                 }	
//                 treetrunk.children.push(treeBranch);	
//             }	
//         }

//         this.children.push(trackerBar);
//         trackerBar.children.push(inputBar)
//         this.children.push(axe)
//         axe.children.push(axeBlade)
//         this.children.push(log)

//         background.children.push(sun)

//         function randomInteger(min, max) {
//             return (Math.random() * (min - max) + max)
//         }
//     }
// }