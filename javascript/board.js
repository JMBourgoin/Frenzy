
class Board {
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.render = this.render.bind(this); 
    }

    draw(){
        let ctx = this.ctx;
        const image = new Image();
        image.addEventListener('load', function() {
        ctx.drawImage(image, 0, 0);
          }, false);
        image.src = './app/assets/images/frenzyboard.png';
    }
   
   
    render(){
        this.ctx.beginPath();
        this.ctx.arc(375, 325, 325, 0, Math.PI*2, false);
        this.ctx.fillStyle = "#212121";
        this.ctx.fill();
        this.ctx.closePath();
    }

};



export default Board;

