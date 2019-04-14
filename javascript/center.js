class Center {
    constructor(x, y, wedges){
        this.x = x;
        this.y = y;
        this.wedges = wedges;
        
        const startWedge = this.wedges.randomWedge();
        this.wedge = [startWedge];

        this.render = this.render.bind(this);
        this.wedgePos = {
            0: { xv: this.x - 40, yv: this.y - 74 },
            1: { xv: this.x - 3, yv: this.y - 66 },
            2: { xv: this.x - 4, yv: this.y - 2 },
            3: { xv: this.x - 40, yv: this.y - 6 },
            4: { xv: this.x - 75, yv: this.y - 3 },
            5: { xv: this.x - 75, yv: this.y - 66 }
        };
        this.addWedge = this.addWedge.bind(this);
        }
    
    handleClick(e){
        e.preventDefault();
        e.stopPropagation();

    }
    addWedge(){
        this.wedge = [];
        let newWedge = this.wedges.randomWedge();
        return this.wedge.push(newWedge);
    }
   
    // Canvas Rendering logic

    render(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 70, 0, Math.PI*2, false);
        ctx.strokeStyle = "#212121";
        ctx.stroke();
        ctx.closePath();

        if (this.wedge.length > 0) {
            this.wedge.forEach(wedge => {
                const num = wedge.num;
                const x = this.wedgePos[num].xv;
                const y = this.wedgePos[num].yv;
                return ctx.drawImage(wedge.image, x, y);
            });
        }

        
    }
};

export default Center;
