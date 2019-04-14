import WedgeCollection from './wedgeCollection';
import Pie from './pie';
import Timer from './timer';
import Center from './center';
import Score from './score';

class Board {
    constructor(){
        this.wedges = new WedgeCollection();
        this.wedges.createWedges();
        this.center = new Center(388, 383, this.wedges);
        this.score = new Score();
        this.timer = new Timer(this.center, this.score);
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
        let wedges = this.wedges;
        e.preventDefault();
        e.stopPropagation();
        pie.handleClick(e, timer, game);
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

    }
    
}
   
   




export default Board;

