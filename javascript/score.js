class Score {
    constructor(stop){
        this.stop = stop;
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.levelCount = 0;

        this.addPoints = this.addPoints.bind(this);
        this.takeLife = this.takeLife.bind(this);
    }

    addLife(){
        this.lives += 1;
    }

    takeLife(){
        this.lives -= 1;
       return this.gameOver() ? this.stop() : null;
    }

    addLevel(){
        this.level += 1;
    }

    addPoints(points){
        this.score += points;
        this.levelCount += points;
        if(this.levelCount >= 50){
            this.levelCount = 0;
            this.level += 1
        }
    }

    gameOver(){
        return this.lives === 0;
    }

    render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = "22px Arial";
        ctx.fillText(this.lives, 212, 670);

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = "22px Arial";
        ctx.fillText(this.score, 568, 670);
    }
}

export default Score;