import Board from './board.js';
import Timer from './timer.js';

class Game {
    constructor(){
        this.board = new Board();
        this.timer = new Timer();
        this.score = 0;
        this.level = 1;
        this.lives = 3;
        this.render = this.render.bind(this);
        this.intervalId = '';
        
    }

    start(){
        this.intervalId = setInterval(this.render, 60);
    }
    
    stop(){
        clearInterval(this.intervalId);
    }

    render(level){
        this.level = level;
        this.timer.draw();
        this.board.render();
    }

}

export default Game;