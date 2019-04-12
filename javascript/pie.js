class Pie {
    constructor(x, y, region){
        this.x = x;
        this.y = y;
        this.region = region;
        this.wedges = [];
        this.colors = [];
        this.render = this.render.bind(this);
    }

    
    wedgeValid(wedge){
        this.wedges.includes(wedge) ? false : true;
    }

    addWedge(wedge, color){
        if(this.wedgeValid(wedge)){
            this.wedges.push(wedge);
            this.colors.push(color);
        }
    }
    
    full(){
        this.pieces.length === 6 ? true : false;
    }

    clear(){
        this.wedges = [];
        this.colors = [];
    }

    score(){
        const colorCounts = {
            green: 0,
            purple: 0,
            orange: 0
        }

        for(let i = 0; i < this.colors.length; i++){
            switch(this.colors[i]){
                case "green":
                    colorCounts.green += 1;
                case "purple":
                    colorCounts.purple += 1;
                case "orange":
                    colorCounts.orange += 1;
            }
        }

        const uniqueColors = new Set(this.colors);
        const colorCountsArr = Object.values(colorCounts).sort;
        const colorCountHigh = colorCountsArr[colorCountsArr.length -1];

        if(uniqueColors.length === 1){
            return 10;
        } else if(colorCountHigh === 5){
            return 5;
        } else if (colorCountHigh >=3){
            return 2;
        } else {
            return 1;
        }
    }
    
    handleClick(event){
        alert('click');
    }


    render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 70, 0, Math.PI*2, false);
        ctx.strokeStyle = "#212121";
        ctx.stroke();
        ctx.closePath();

        
        // ctx.addHitRegion({id: this.region});
        // canvas.addEventListener('click', this.handleClick(event));
    }
};

export default Pie;
