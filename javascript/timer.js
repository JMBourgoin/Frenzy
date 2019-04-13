import Center from "./center";

class Timer {
    constructor (center) {
        this.center = center;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.render = this.render.bind(this);
        this.draw = this.draw.bind(this);
        this.x = .01;
        }

    draw(){
        this.ctx.clearRect(0, 0, 800, 800);
        let color = '';
        if (this.x < 1) {
            color = '#00FF00';
            this.render(this.x, color);
        } else if (this.x < 1.6 && this.x > .7) {
            color = 'yellow';
            this.render(this.x, color);
        } else if (this.x <= 2) {
            color = 'red';
            this.render(this.x, color);
        } else {
            this.center.addWedge();
            this.x = 0;
        }
        this.x += .025;
    }

    reset(){
        this.center.addWedge();
        this.x = .01;
    }

    render(interval, color){
        let wid = 15 + (this.x * 18);
        this.ctx.beginPath();
        this.ctx.lineWidth = wid;
        this.ctx.arc(388, 383, 110, 0, Math.PI*interval, false);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
        this.ctx.closePath();

    }
}


export default Timer;