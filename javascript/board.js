import WedgeCollection from './wedgeCollection';
import Pie from './pie';
import Timer from './timer';
import Center from './center';
import Score from './score';
import SoundCollection from './soundCollection';
import $ from 'jquery';

class Board {
    constructor(stop){
        this.stop = stop;
        this.wedges = new WedgeCollection();
        this.wedges.createWedges();
        this.sounds = new SoundCollection();
        this.sounds.createSounds();
        this.center = new Center(388, 383, this.wedges);
        this.score = new Score();
        this.timer = new Timer(this.center, this.score, this.sounds);
        this.topPie = new Pie(388, 173, this.center, this.score);
        this.bottomPie = new Pie(388, 605, this.center, this.score);
        this.leftTopPie = new Pie(185, 283, this.center, this.score);
        this.leftBottomPie = new Pie(185, 475, this.center, this.score);
        this.rightTopPie = new Pie(589, 283, this.center, this.score);
        this.rightBottomPie = new Pie(590, 475, this.center, this.score);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, pie, game){
        let timer = this.timer;
        let sounds = this.sounds;
        let score = this.score;
        e.preventDefault();
        e.stopPropagation();
        pie.handleClick(e, timer, score, sounds);
    }

    gameOver(){
        this.score.newGame();
        this.topPie.newGame();
        this.bottomPie.newGame();
        this.leftTopPie.newGame();
        this.leftBottomPie.newGame();
        this.rightTopPie.newGame();
        this.rightBottomPie.newGame();
        this.timer.reset();
        this.stop();
    }

    render(){
        this.timer.draw();
        this.score.render();
        this.topPie.render();
        this.bottomPie.render(); 
        this.center.render(); 
        this.leftTopPie.render(); 
        this.leftBottomPie.render(); 
        this.rightTopPie.render();
        this.rightBottomPie.render();
        if(this.score.gameOver()){
            this.sounds.playGameOver();
            this.gameOver();
            this.stop();
            const gameOver = document.getElementById("gameOver");
            gameOver.className = "game-over-modal";
            const $yourScore = $("#yourScore");
            const $highScore = $("#highScore");
            $yourScore.html(this.score.yourScore);

        }

    }
    
}
   
   




export default Board;

