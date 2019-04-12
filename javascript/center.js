class Center {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.wedge = '';
        this.color = '';
        this.render = this.render.bind(this);
        this.draw = this.draw.bind(this);
    }
    
    addWedge({wedge, color}){
            this.wedge = wedge;
            this.color = color;
    }
   
    // Canvas Rendering logic

    draw(){
        setInterval(this.render, 10);
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

export default Center;
