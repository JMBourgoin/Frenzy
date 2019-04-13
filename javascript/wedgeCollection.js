
class WedgeCollection {
    constructor (){
        this.wedges = [
            0,
            1,
            2,
            3,
            4,
            5
        ];

        this.colors = [
            "p",
            "g",
            "o"
        ];
        
        this.purples = [];
        this.oranges = [];
        this.greens = [];
        this.createWedges = this.createWedges.bind(this);
        this.randomWedge = this.randomWedge.bind(this);
    }

    createWedges(){
        const oranges = [
            'o0',
            'o1',
            'o2',
            'o3',
            'o4',
            'o5',
        ]
        const purples = [
            'p0',
            'p1',
            'p2',
            'p3',
            'p4',
            'p5',
        ]

        const greens = [
            'g0',
            'g1',
            'g2',
            'g3',
            'g4',
            'g5'
        ]

        greens.forEach(pic => {
            let img = new Image();
            img.src = `./app/assets/images/wedges/${pic}.png`;
            return this.greens.push(img);
        });
        
        purples.forEach(pic => {
            let img = new Image();
            img.src = `./app/assets/images/wedges/${pic}.png`;
            return this.purples.push(img);
        });

        oranges.forEach(pic => {
            let img = new Image();
            img.src = `./app/assets/images/wedges/${pic}.png`;
            return this.oranges.push(img);
        });
    }
    randomNum(max){
            return Math.floor(Math.random() * Math.floor(max));
    }

    randomWedge(){
        const num = this.randomNum(6);
        const color = this.colors[this.randomNum(3)];
        
        let img = '';

        if(color === 'g'){
            img = this.greens[num];
        } else if(color === 'p'){
            img = this.purples[num];
        } else if(color === 'o'){
            img = this.oranges[num];
        }
        // switch(color){
        //     case 'g':
        //         img = this.greens[num];
        //     case 'p':
        //         img = this.purples[num];
        //     case 'o':
        //         img = this.oranges[num];
        // }

        return {
            num: num,
            color: color,
            image: img
        };
    }  
}

export default WedgeCollection;