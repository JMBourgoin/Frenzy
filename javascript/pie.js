class Pie {
    constructor(x, y, center, score){
        this.x = x;
        this.y = y;
        this.wedgeNums = [];
        this.colors = [];
        this.wedges = [];
        this.center = center;
        this.score = score;

        this.render = this.render.bind(this);
        this.wedgePos = {
            0: {xv: this.x - 40, yv: this.y - 74},
            1: {xv: this.x - 3, yv: this.y -66},
            2: {xv: this.x - 4, yv: this.y - 2},
            3: {xv: this.x -40, yv: this.y - 6},
            4: {xv: this.x -75, yv: this.y - 3},
            5: {xv: this.x - 75, yv: this.y - 66}
        };
        this.wedgeValid = this.wedgeValid.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    wedgeValid(wedge){
        return this.wedgeNums.includes(wedge.num) ? false : true;
    }

    addWedge(wedge){
        this.wedgeNums.push(wedge.num);
        this.colors.push(wedge.color);
        this.wedges.push(wedge);
    }
    
    full(){
      return this.wedges.length === 6 ? true : false;
    }

    clear(){
        const points = this.pointScore();
        if(points === 25){
            this.score.addLife();
        }
        this.score.addPoints(points);
        this.wedges = [];
        this.colors = [];
        this.wedgeNums = [];
    }
    
    newGame(){
        this.wedges = [];
        this.colors = [];
        this.wedgeNums = [];
    }

    pointScore(){
        const colorCounts = {
            green: 0,
            purple: 0,
            orange: 0
        }

        for(let i = 0; i < this.colors.length; i++){
            if(this.colors[i] === "g"){
                colorCounts.green += 1;
            } else if(this.colors[i] === "p"){
                colorCounts.purple += 1;
            } else if(this.colors[i] === "o"){
                colorCounts.orange += 1;
            }
        }

        const uniqueColors = new Set(this.colors);
        const colorCountsArr = Object.values(colorCounts).sort();
        const colorCountHigh = colorCountsArr[colorCountsArr.length -1];
        
      

        if(uniqueColors.size === 1){
            return 25;
        } else if(colorCountHigh === 5){
            return 15;
        } else if (colorCountHigh >=3){
            return 10;
        } else {
            return 5;
        }
    }
    
    handleClick(e, timer){
        e.preventDefault();
        let wedge = this.center.wedge[0];
        if(this.wedgeValid(wedge)){
            timer.reset();
            this.addWedge(wedge);
        }
        if(this.full()){
            this.clear();
        }
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

        if(this.wedges.length > 0){
            this.wedges.forEach(wedge => {
                const num = wedge.num;
                const x = this.wedgePos[num].xv;
                const y = this.wedgePos[num].yv;
                return ctx.drawImage(wedge.image, x, y);
            });
            if(this.score.gameOver()){
                this.newGame();
            }
        }
    

        
        // ctx.addHitRegion({id: this.region});
        // canvas.addEventListener('click', this.handleClick(event));
    }
};

export default Pie;
