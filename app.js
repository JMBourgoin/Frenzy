import Pie from './javascript/pie';
import Board from './javascript/board';
import Timer from './javascript/timer';
import Game from './javascript/game';


const game = new Game();
game.start();


// -----------------------------------------------------

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const xmargin = rect.x;
const ymargin = rect.x;

// -------------------------------------------------------

window.addEventListener('click', function(e) {
    
    let x = (e.pageX - xmargin);
    let y = (e.pageY - ymargin);
    const topPie = game.board.topPie;
    const bottomPie = game.board.bottomPie;
    const leftTopPie = game.board.leftTopPie;
    const leftBottomPie = game.board.leftBottomPie;
    const rightTopPie = game.board.rightTopPie;
    const rightBottomPie = game.board.rightBottomPie;

    if (x > 353 && x < 423 && y >164 && y < 234){
        console.log('click1');
        game.board.handleClick(topPie);
    } else if (x > 353 && x < 423 && y > 595 && y < 665){
        game.board.handleClick(bottomPie);
    } else if (x > 151 && x < 221 && y > 273 && y < 343){
        game.board.handleClick(leftTopPie);
    } else if (x > 151 && x < 221 && y > 467 && y < 502){
        game.board.handleClick(leftBottomPie);
    } else if (x > 557 && x < 627 && y > 274 && y > 344){
        game.board.handleCick(rightTopPie);
    } else if ( x > 557 && x < 627 && y > 274 && y > 344){
        game.board.handleClick(rightBottomPie);
    }  
});


// window.addEventListener('mousemove', function (e) {
//     ctx.x = e.pageX;
//     ctx.y = e.pageY;
//     console.log("x: " + ctx.x);
//     console.log("y: " + ctx.y);
//   });