class SoundCollection {
    constructor(){
        this.pieWedge = "";
        this.clear = '';
        this.center = '';
        this.quit = '';
        this.gameOver = '';
        this.playCenter = this.playCenter.bind(this);
        this.playPieWedge = this.playPieWedge.bind(this);
        this.playClear = this.playClear.bind(this);
        this.playGameOver = this.playGameOver.bind(this);
    }
    playStart(){
        this.start.play();
    }

    playQuit(){
        this.quit.play();
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

    playGameOver(){
        this.gameOver.play();
    }

    pauseAll(){
        this.pieWedge.pause();
        this.gameOver.pause();
        this.gameOver.src = '';
        this.gameOver.src = "./app/assets/sounds/gameover.mp3";
        this.clear.pause();
        this.center.pause();
    }

    createSounds(){
        this.pieWedge = document.createElement("audio");
        this.pieWedge.src = "./app/assets/sounds/wedge.mp3";

        this.clear = document.createElement("audio");
        this.clear.src = "./app/assets/sounds/pie-clear.mp3";    

        this.center = document.createElement("audio");
        this.center.src = "./app/assets/sounds/center-click.mp3";

         this.quit = document.createElement("audio");
         this.quit.src = "./app/assets/sounds/quit.mp3";

         this.start = document.createElement("audio");
         this.start.src = "./app/assets/sounds/start.mp3";

         this.gameOver = document.createElement("audio");
         this.gameOver.src = "./app/assets/sounds/gameover.mp3";
    }
}

export default SoundCollection;