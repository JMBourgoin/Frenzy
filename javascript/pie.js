class Pie {
    constructor(x, y, center){
        this.x = x;
        this.y = y;
        this.wedgeNums = [];
        this.colors = [];
        this.wedges = [];
        this.center = center;
        this.render = this.render.bind(this);
        this.wedgePos = {
            0: {xv: this.x - 40, yv: this.y - 74},
            1: {xv: this.x - 3, yv: this.y -66},
            2: {xv: this.x - 4, yv: this.y - 2},
            3: {xv: this.x -40, yv: this.y - 6},
            4: {xv: this.x -75, yv: this.y - 3},
            5: {xv: this.x - 75, yv: this.y - 66}
        };
        this.wedgeValid = this.wedgeValid.bind(this);
    }

    
    wedgeValid(wedge){
        return this.wedgeNums.includes(wedge.num) ? false : true;
    }

    addWedge(wedge){
        this.wedgeNums.push(wedge.num);
        this.colors.push(wedge.color);
        this.wedges.push(wedge);
    }
    
    full(){
      return this.wedges.length === 6 ? true : false;
    }

    clear(){
        this.wedges = [];
        this.colors = [];
        this.wedgeNums = [];
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
    
    handleClick(e, timer, wedges){
        e.preventDefault();
        let wedge = this.center.wedge[0];
        if(this.wedgeValid(wedge)){
            timer.reset();
            this.addWedge(wedge);
        }
        if(this.full()){
            this.clear();
        }
        
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

        if(this.wedges.length > 0){
            this.wedges.forEach(wedge => {
                const num = wedge.num;
                const x = this.wedgePos[num].xv;
                const y = this.wedgePos[num].yv;
                return ctx.drawImage(wedge.image, x, y);
            });
        }
    

        
        // ctx.addHitRegion({id: this.region});
        // canvas.addEventListener('click', this.handleClick(event));
    }
};

export default Pie;
