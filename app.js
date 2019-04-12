import Pie from './javascript/pie';
import Board from './javascript/board';
import Timer from './javascript/timer';

const timer = new Timer();
const topPie = new Pie(388, 199);
const bottomPie = new Pie(388, 630);
const centerPie = new Pie(388, 410);
const leftTopPie = new Pie(186, 308);
const leftBottomPie = new Pie(186, 502);
const rightTopPie = new Pie(592, 309);
const rightBottomPie = new Pie(592, 501);

timer.start();
let pieArray = [
    topPie, 
    bottomPie, 
    centerPie, 
    leftTopPie, 
    leftBottomPie, 
    rightTopPie,
    rightBottomPie 
]

const startGameHandler = e => {}
pieArray.forEach(pie => pie.render());
document.addEventListener('click', startGameHandler, false);