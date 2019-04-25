import 'firebase/database';
class Score {
    constructor(){
        this.score = 0;
        this.lives = 6;
        this.level = 1;
        this.levelCount = 0;
        this.totalLevels = 0;
        this.radioactive = false;
        this.five = false;
        this.hourglass = false;
        this.sandsTime = 0;
        this.fiveScore = 0;
        this.radioActiveCount = 0;
        this.yourScore = 0;
        this.highs = [];
        this.names = [];
        this.database = firebase.database().ref('scores/');
        this.addPoints = this.addPoints.bind(this);
        this.takeLife = this.takeLife.bind(this);
        this.deactivateRadioactive = this.deactivateRadioactive.bind(this);
        this.setScore = this.setScore.bind(this);
        this.getScores = this.getScores.bind(this);
        this.resetScores = this.resetScores.bind(this);
    }

    setScore(score, name){
       let scoreRef = this.database.child(score);
       scoreRef.set({
           name,
       });
    }

    getScores(){
        let ref = this.database.orderByKey();
        let score = '';
        ref.on("value", snapshot =>{
            score = snapshot.val();
        })
        this.highs = Object.keys(score).sort((a, b)=>{return b - a});
        Object.values(score).forEach(score => {
            this.names.unshift(score.name);   
        })
    }
    resetScores(){
        this.highs = [];
        this.names = [];
    }

    isRadioactive(){
        return this.radioactive;
    }

    isFive(){
        return this.five;
    }

    isHourglass(){
        return this.hourglass;
    }

    addFive(){
        this.lives += 5;
        this.score += 25;
    }

    rewindTime(){
        if(this.level >= 7)
        this.level -= 5;
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

    deactivateFive(){
        this.five = false;
    }

    deactivateHourglass(){
        this.hourglass = false;
    }

    addLevel(){
        this.level += 1;
        this.totalLevels += 1;
        this.radioActiveCount += 0.5;
        
        if(this.radioActiveCount === 1){
            this.radioactive = true;
            this.radioActiveCount = 0;
        }
        if(this.totalLevels % 7 === 0){
            this.hourglass = true;
        }

        if(this.totalLevels % 5 === 0){
            this.five = true;
        }
    }

    addPoints(points){
        this.score += points;
        this.fiveScore += points;
        this.levelCount += points;
    
        if(this.levelCount >= 50){
            this.levelCount = 0;
            this.addLevel();
            this.addLife();
        }

    }

    newGame(){
        this.yourScore = this.score;
        if(this.score > this.highs[2]){
            let name = window.prompt("You got a highscore!  Congrats!  Enter your initials:");
            this.setScore(this.score, name);
        }

        this.getScores();
    
        this.score = 0;
        this.lives = 6;
        this.level = 1;
        this.totalLevels = 0;
        this.levelCount = 0;
        this.sandsTime = 0;
        this.fiveScore = 0;
        this.radioActiveCount = 0;
    }

    gameOver(){
        return this.lives === 0;
    }

    render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = "22px sans-serif";
        ctx.fillText(this.lives, 210, 673);

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = "22px sans-serif";
        ctx.fillText(this.score, 568, 673);
    }
}

export default Score;