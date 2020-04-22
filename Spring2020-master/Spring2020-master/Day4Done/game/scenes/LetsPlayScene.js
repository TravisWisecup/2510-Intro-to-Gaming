export default {
    name: "LetsPlayScene",
    objects : [ 
        {
            name:"FewTrees",
            type:'FewTrees',
            location:{x:0,y:0}
          },
        {
            name: "Main Camera",
            location: { x: 300, y: 300 },
            type: "Camera",
            componentValues: [
              {
                type: "CameraComponent",
                values: [
                  {
                    key: "backgroundColor",
                    value: "white"
                  }
                ],
              }
            ],
            components: [
              {
                type: "CameraMover"
              }
            ]
          },
          {
            name: "Canvas",
            location: { x: 0, y: 0 },
            type: "Canvas",
            children: [
            ]
          },
          {
            name:"axe",
            location: {x:220, y:70},
            type:"Axe",
            children:[
                {
                    name:"axeBlade",
                    location: {x:0, y:-15},
                    type:"AxeBlade",
                }
              ]
          },
        {
            name: "StartGame",
            location: { x: 200, y: 200 },
            type: "StartButton",
            components: [
                {
                    type:"ClickBehavior",
                },
            ],
            children: [
            {
                name: "Start",
                location: {x:-70, y:10},
                type: "Text",
                componentValues: [
                  {
                    type: "TextComponent",
                    values: [
                      {
                        key: "text",
                        value: "Click to start.",
                      }
                    ]
                  }
                ]
              },
            ]
          },
     ]
  }