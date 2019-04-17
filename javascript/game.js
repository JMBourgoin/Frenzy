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
        this.help = false;
        this.toggleHelp = this.toggleHelp.bind(this);
        
    }

    start(){
        this.intervalId = setInterval(this.render, 60);
    }
    
    stop(){
        clearInterval(this.intervalId);
        this.ctx.clearRect(0, 0, 800, 800);
    }

    renderHelp(){
        const help = document.getElementById("help");
        help.className = "instructions";
    }

    toggleHelp(){
        if(this.help === false){
            this.help = true;
            this.intervalId = setInterval(this.renderHelp(), 60);
        } else {
            this.help = false;
            const help = document.getElementById("help");
            help.className = "hide";
            clearInterval(this.intervalId);
        };
    }



    render(){
        this.board.render();
    }

}

export default Game;