export default {
  name: "CollisionCircle",
  components:[
    {
      type:"CircleComponent",
      values:[
        {
          key:"radius",
          value:"50"
        },
        {
          key:"fill",
          value:"rgba(255,255,0,.5)"
        },
        {
          key:"stroke",
          value:"black"
        },
      ]
    },
    {
      type:"CircleCollider",
      values:[
        {
          key:"radius",
          value:"50"
        }
      ]
    },
    {
      type:"CollisionCircleBehavior",
    },

  ]
}
