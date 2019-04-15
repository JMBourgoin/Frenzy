import Center from "./center";

class Timer {
    constructor (center, score) {
        this.score = score;
        this.center = center;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.render = this.render.bind(this);
        this.draw = this.draw.bind(this);
        this.reset = this.reset.bind(this);
        this.incrementInterval = this.incrementInterval.bind(this);
        }
    
    incrementInterval(){
        if(this.score.level === 1){
            return this.x += 0.025;
        } else {
            const multiplier = this.score.level * 0.75;
            return this.x += multiplier * 0.025;
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, 800, 800);
        let color = '';
        if (this.x < 1) {
            color = 'rgb(0,255,0,.3)';
            this.render(this.x, color);
        } else if (this.x < 1.6 && this.x > .7) {
            color = "rgb(204,0,255,.3)";
            this.render(this.x, color);
        } else if (this.x <= 2) {
            color = "rgb(255,0,0,.5)";
            this.render(this.x, color);
        } else {
            this.score.takeLife();
            this.center.addWedge();
            this.x = 0;
        }
        this.incrementInterval();
    }

    reset(){
        this.center.addWedge();
        this.x = 0.01;
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