class RadioActive {
    constructor(x, y, pieShop, center, score){
        this.image ='';
        this.x = x;
        this.y = y;
        this.pieShop = pieShop;
        this.center = center;
        this.score = score;
        this.handleClick = this.handleClick.bind(this);
    }

    generateImage(){
        let img = new Image();
        img.src = `./app/assets/images/radioactive.png`;
        this.image = img;
    }

    handleClick(e){
        e.preventDefault();
        this.pieShop.forEach(pie => {
            return pie.clear();
        });
        this.score.deactivateRadioactive();
    }

    render(){
        if(this.score.isRadioactive()){
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            const x = this.x;
            const y = this.y;
            return ctx.drawImage(this.image, x, y);
        }
    }
}

export default RadioActive;