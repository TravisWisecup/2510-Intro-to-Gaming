export default {
  name: "AxeBlade",
  components:[
    {
      type:"AxeBladeComponent",
      values:[
        {
          key: "x",
          value: "105"
        },
        {
          key: "y",
          value: "3"
        },
        {
          key: "r",
          value: "50"
        },
        {
          key: "sAngle",
          value: "0"
        },
        {
          key: "eAngle",
          value: "Math.PI"
        },
        {
          key: "fill",
          value: "gray"
        },

      ]
    },
    {
      type:"AxeHandleBehavior",
    },
  ]
}