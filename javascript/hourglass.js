class Hourglass {
    constructor(x, y, center, score){
        this.image ='';
        this.x = x;
        this.y = y;
        this.center = center;
        this.score = score;
        this.handleClick = this.handleClick.bind(this);
    }

    generateImage(){
        let img = new Image();
        img.src = `./app/assets/images/hourglass.png`;
        this.image = img;
    }

    handleClick(e){
        e.preventDefault();
        this.score.rewindTime();
        e.stopPropagation();
        this.score.deactivateHourglass();
    }

    render(){
        if(this.score.isHourglass()){
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            const x = this.x;
            const y = this.y;
            return ctx.drawImage(this.image, x, y);
        }
    }
}

export default Hourglass;