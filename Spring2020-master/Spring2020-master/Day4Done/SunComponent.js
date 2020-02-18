import Component from "./Component.js"

class SunComponent extends Component{
    radius;
    fill;
    stroke;
    constructor(radius, fill, stroke){
        super();
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
    }
    draw(ctx){
        ctx.save();

        var now = new Date();
        var seconds = ((now.getSeconds() * 1000) + now.getMilliseconds()) / 1000;

        var anglePerSecond = ((Math.PI * 2)/12);
        ctx.rotate(anglePerSecond * seconds);
        ctx.translate(450,0)

        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,2*Math.PI,);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }
    update(){

    }
}

export default SunComponent;