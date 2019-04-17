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

    if (x > 318 && x < 458 && y >101 && y < 245){
        console.log('click1');
        game.board.handleClick(e, topPie);

    } else if (x > 318 && x < 458 && y > 523 && y < 662){
        console.log('click4');
        game.board.handleClick(e, bottomPie);

    } else if(x > 317 && x < 459 && y > 313 && y < 442 && gameOver.className === 'hide'){
        console.log("center");
        game.board.handleClick(e, center);

    } else if (gameOver.className === "game-over-modal" && x > 360 && x < 396 && y > 439 && y < 479) {
          gameOver.className = "hide";
          game.board.sounds.pauseAll();

    } else if (x > 114 && x < 257 && y > 203 && y < 352){
        console.log('click6');
        game.board.handleClick(e, leftTopPie);

    } else if (x > 128 && x < 257 && y > 402 && y < 545){
        console.log('click5');
        game.board.handleClick(e, leftBottomPie);

    } else if (x > 518 && x < 661 && y > 203 && y < 353){
        console.log('click2');
        game.board.handleClick(e, rightTopPie);

    } else if ( x > 507 && x < 633 && y > 411 && y < 535){
        console.log('click3');
        game.board.handleClick(e, rightBottomPie);

    } else if ( x > 177 && x < 230 && y > 94 && y < 145){
        console.log('start');
        game.board.sounds.playStart();
        game.start();

    }else if ( x > 239 && x < 290 && y > 64 && y < 118){
        console.log('stop');
        game.board.sounds.playQuit();
        game.board.gameOver();
        game.stop();

    } else if ( x > 113 && x < 164 && y > 144 && y < 194){
        console.log('help');
        game.board.sounds.playPieWedge();
        game.toggleHelp();
        
    }  else if (x > 0 && x < 185 && y > 41 && y < 56){
        console.log('closehelp');
        game.toggleHelp();

    } else if ( x > 107 && x < 164 && y > 364 && y < 417){
            console.log('radioactive');
        if(game.board.score.isRadioactive()){
            game.board.radioActive.handleClick(e);
            game.board.sounds.playRadioactive();
        }

    } else if ( x > 455 && x < 511 && y > 125 && y <182){
        console.log('5x');
        if(game.board.score.isFive()){
            game.board.five.handleClick(e);
            game.board.sounds.playFiveX();
        }

    } else if ( x > 619 && x < 673 && y > 356 && y < 414){
        console.log('hourglass');
        if(game.board.score.isHourglass()){
            game.board.hourglass.handleClick(e);
        }
    } else if (x > 452 && x < 507 && y > 46 && y < 70){
        console.log('jmb');
        window.open('https://jmbourgoin.com');

    } else if (x > 528 && x < 558 && y > 64 && y < 92){
        console.log('github');
        window.open('https://github.com/jmbourgoin');

    } else if (x > 576 && x < 605 && y > 98 && y < 126){
        console.log('insta');
        window.open('https://www.instagram.com/jmb.shots/');
    } else if (x > 616 && x < 645 && y > 141 && y < 168){
        console.log('linked-in');
        window.open('https://www.linkedin.com/in/jason-bourgoin-060a6a116/')
    }
});
  
                                        
                                    
// Code snippet to provide an x,y coordinate to print 
// on the console relative to the game board.  Accounts 
// for thewindow size.

window.addEventListener('mousemove', function(e){
    e.preventDefault();
    let x = (e.pageX - xmargin);
    let y = (e.pageY -ymargin);

    console.log('x: ' + x);
    console.log('y: ' + y);
});