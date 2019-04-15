class Score {
    constructor(){
        this.score = 0;
        this.lives = 6;
        this.level = 1;
        this.levelCount = 0;
        this.radioactive = false;
        this.yourScore = 0;

        this.addPoints = this.addPoints.bind(this);
        this.takeLife = this.takeLife.bind(this);
        this.deactivateRadioactive = this.deactivateRadioactive.bind(this);
    }

    isRadioactive(){
        return this.radioactive;
    }

    addLife(){
        this.lives += 1;
    }

    takeLife(){
        this.lives -= 1;
    }

    deactivateRadioactive(){
        this.radioactive = false;
    }

    addLevel(){
        this.level += 1;
        if(this.radioactive === false){
            this.radioactive = true;
        }
    }

    addPoints(points){
        this.score += points;
        this.levelCount += points;
    
        if(this.levelCount >= 50){
            this.levelCount = 0;
            this.addLevel();
            this.addLife();
        }
    }

    newGame(){
        this.yourScore = this.score;
        this.score = 0;
        this.lives = 6;
        this.level = 1;
        this.levelCount = 0;
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