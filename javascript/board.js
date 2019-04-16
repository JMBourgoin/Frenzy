import WedgeCollection from './wedgeCollection';
import Pie from './pie';
import Timer from './timer';
import Center from './center';
import Score from './score';
import SoundCollection from './soundCollection';
import $ from 'jquery';
import RadioActive from './radioactive';
import Five from './five';
import Hourglass from './hourglass';


class Board {
    constructor(stop){
        this.stop = stop;
        this.wedges = new WedgeCollection();
        this.wedges.createWedges();
        this.sounds = new SoundCollection();
        this.sounds.createSounds();
        this.center = new Center(388, 373.5, this.wedges);
        this.score = new Score();
        this.timer = new Timer(this.center, this.score, this.sounds);
        this.topPie = new Pie(388, 168, this.center, this.score);
        this.bottomPie = new Pie(388, 589, this.center, this.score);
        this.leftTopPie = new Pie(191, 275, this.center, this.score);
        this.leftBottomPie = new Pie(191, 462, this.center, this.score);
        this.rightTopPie = new Pie(584, 275, this.center, this.score);
        this.rightBottomPie = new Pie(584, 462, this.center, this.score);
        this.handleClick = this.handleClick.bind(this);
        const pieShop = [this.topPie, this.bottomPie, this.leftTopPie, this.leftBottomPie, this.rightTopPie, this.rightBottomPie];
        this.radioActive = new RadioActive(110, 363, pieShop, this.center, this.score);
        this.radioActive.generateImage();
        this.five = new Five (453, 123, this.center, this.score);
        this.five.generateImage();
        this.hourglass = new Hourglass(618, 362, this.center, this.score);
        this.hourglass.generateImage();
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
        this.score.deactivateFive();
        this.score.deactivateRadioactive();
        this.score.deactivateHourglass();
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
        this.radioActive.render();
        this.five.render();
        this.hourglass.render();
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

