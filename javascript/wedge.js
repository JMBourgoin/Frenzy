class Wedge {
    constructor (){
        this.wedges = [
            1,
            2,
            3,
            4,
            5,
            6
        ]

        this.colors = [
            "purple",
            "green",
            "orange"
        ]
    }

    randomWedge(){
        const num = this.wedges[Math.floor(Math.random()*this.wedges.length)];
        const color = this.colors[Math.floor(Math.random()*this.colors.length)];
        return {
            wedge: num,
            color: color
        };
    }  
}