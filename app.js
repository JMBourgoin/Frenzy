import Pie from './javascript/pie';
import Board from './javascript/board';
import Timer from './javascript/timer';
import Game from './javascript/game';
import jquery from 'jquery';

const game = new Game();
// -----------------------------------------------------

const canvas = document.getElementById("myCanvas");
const gameOver = document.getElementById("gameOver");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const xmargin = rect.x;
const ymargin = rect.y;
// -------------------------------------------------------

window.addEventListener('click', function(e) {
    e.preventDefault();
    let x = (e.pageX - xmargin);
    let y = (e.pageY - ymargin);
    const topPie = game.board.topPie;
    const bottomPie = game.board.bottomPie;
    const leftTopPie = game.board.leftTopPie;
    const leftBottomPie = game.board.leftBottomPie;
    const rightTopPie = game.board.rightTopPie;
    const rightBottomPie = game.board.rightBottomPie;
    const center = game.board.center;

    if (x > 318 && x < 458 && y >106 && y < 244){
        console.log('click1');
        game.board.handleClick(e, topPie);
    } else if (x > 318 && x < 458 && y > 536 && y < 681){
        console.log('click4');
        game.board.handleClick(e, bottomPie);
    } else if(x > 317 && x < 459 && y > 311 && y < 458){
        console.log("center");
        game.board.handleClick(e, center);
        if (gameOver.className === "game-over-modal") {
          gameOver.className = "hide";
        }
    } else if (x > 114 && x < 257 && y > 214 && y < 357){
        console.log('click6');
        game.board.handleClick(e, leftTopPie);
    } else if (x > 114 && x < 257 && y > 407 && y < 550){
        console.log('click5');
        game.board.handleClick(e, leftBottomPie);
    } else if (x > 518 && x < 661 && y > 214 && y < 357){
        console.log('click2');
        game.board.handleClick(e, rightTopPie);
    } else if ( x > 518 && x < 661 && y > 407 && y < 550){
        console.log('click3');
        game.board.handleClick(e, rightBottomPie);
    } else if ( x > 171 && x < 225 && y > 98 && y < 150){
        console.log('start');
        game.start();
    }else if ( x > 235 && x < 287 && y > 61 && y < 114){
        console.log('stop');
        game.board.gameOver();
        game.stop();
    }
});
  
                                        
                                    
// Code snippet to provide an x,y coordinate to print 
// on the console relative to the game board.  Accounts 
// for thewindow size.

// window.addEventListener('mousemove', function(e){
//     e.preventDefault();
//     let x = (e.pageX - xmargin);
//     let y = (e.pageY -ymargin);

//     console.log('x: ' + x);
//     console.log('y: ' + y);
// });