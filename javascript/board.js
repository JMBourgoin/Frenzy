
import Pie from './pie';

class Board {
    constructor(){
        this.topPie = new Pie(388, 199, 'top');
        this.bottomPie = new Pie(389, 631, 'bottom');
        this.centerPie = new Pie(389, 410, 'center');
        this.leftTopPie = new Pie(186, 308, 'leftTop');
        this.leftBottomPie = new Pie(186, 502, 'leftBottom');
        this.rightTopPie = new Pie(592, 309, 'rightTop');
        this.rightBottomPie = new Pie(592, 501, 'rightBottom');
    }

    handleClick(pie){
        debugger
        pie.handleClick();
    }

    render(){
        this.topPie.render();
        this.bottomPie.render(); 
        this.centerPie.render(); 
        this.leftTopPie.render(); 
        this.leftBottomPie.render(); 
        this.rightTopPie.render();
        this.rightBottomPie.render();
        
    }
    
}
   
   




export default Board;

