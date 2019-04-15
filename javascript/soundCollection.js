class SoundCollection {
    constructor(){
        this.pieWedge = "";
        this.clear = '';
        this.center = '';
        this.playCenter = this.playCenter.bind(this);
        this.playPieWedge = this.playPieWedge.bind(this);
        this.playClear = this.playClear.bind(this);
    }
    playPieWedge(){
        this.pieWedge.play();
    }

    playClear(){
        this.clear.play();
    }

    playCenter(){
        this.center.play();
    }

    pauseAll(){
        this.pieWedge.pause();
    }

    createSounds(){
        this.pieWedge = document.createElement("audio");
        this.pieWedge.src = "./app/assets/sounds/wedge.mp3";

        this.clear = document.createElement("audio");
        this.clear.src = "./app/assets/sounds/pie-clear.mp3";    

        this.center = document.createElement("audio");
        this.center.src = "./app/assets/sounds/center-click.mp3";
    }
}

export default SoundCollection;