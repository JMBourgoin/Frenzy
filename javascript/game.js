import Board from './board.js';
import Timer from './timer.js';

class Game {
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.render = this.render.bind(this);
        this.intervalId = '';
        this.stop = this.stop.bind(this);
        this.board = new Board(this.stop);
        
    }

    start(){
        this.intervalId = setInterval(this.render, 60);
    }
    
    stop(){
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, 800, 800);


    }

    render(){
        this.board.render();
    }

}

export default Game;