import WedgeCollection from './wedgeCollection';
import Pie from './pie';
import Timer from './timer';
import Center from './center';

class Board {
    constructor(){
        this.wedges = new WedgeCollection();
        this.wedges.createWedges();
        this.center = new Center(388, 383, this.wedges);
        this.timer = new Timer(this.center);
        this.topPie = new Pie(388, 173, this.center);
        this.bottomPie = new Pie(388, 605, this.center);
        this.leftTopPie = new Pie(185, 283, this.center);
        this.leftBottomPie = new Pie(185, 475, this.center);
        this.rightTopPie = new Pie(589, 283, this.center);
        this.rightBottomPie = new Pie(590, 475, this.center);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, pie){
        let timer = this.timer;
        let wedges = this.wedges;
        e.preventDefault();
        e.stopPropagation();
        pie.handleClick(e, timer, wedges);
    }

    render(){
        this.timer.draw();
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

