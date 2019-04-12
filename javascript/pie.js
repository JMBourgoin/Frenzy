class Pie {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        setInterval(render, 10);
    }
    render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 70, 0, Math.PI*2, false);
        ctx.strokeStyle = "#212121";
        ctx.stroke();
        ctx.closePath();
    }
};

export default Pie;
