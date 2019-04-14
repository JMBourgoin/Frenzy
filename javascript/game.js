import Board from './board.js';
import Timer from './timer.js';

class Game {
    constructor(){
        this.board = new Board();
        this.render = this.render.bind(this);
        this.intervalId = '';
        this.stop = this.stop.bind(this);
        
    }

    start(){
        this.intervalId = setInterval(this.render, 60);
    }
    
    stop(){
        clearInterval(this.intervalId);
    }

    render(){
        this.board.render();
    }

}

export default Game;