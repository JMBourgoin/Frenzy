class SoundCollection {
    constructor(){
        this.pieWedge = "";
        this.clear = '';
        this.center = '';
        this.quit = '';
        this.gameOver = '';
        this.fiveX = '';
        this.radioActive = '';
        this.hourglass = '';
        this.playCenter = this.playCenter.bind(this);
        this.playPieWedge = this.playPieWedge.bind(this);
        this.playClear = this.playClear.bind(this);
        this.playGameOver = this.playGameOver.bind(this);
        this.playRadioactive = this.playRadioactive.bind(this);
        this.playFiveX = this.playFiveX.bind(this);
        this.playHourglass = this.playHourglass.bind(this);
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

    playRadioactive(){
        this.radioActive.play();
    }

    playFiveX(){
        this.fiveX.play();
    }

    playHourglass(){
        this.hourglass.play();
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

         this.radioActive = document.createElement("audio");
         this.radioActive.src = "./app/assets/sounds/radioactive.mp3";

         this.fiveX = document.createElement("audio");
         this.fiveX.src = "./app/assets/sounds/5x.mp3";

         this.hourglass = document.createElement("audio");
         this.hourglass.src = "./app/assets/sounds/hourglass.mp3";
    }
}

export default SoundCollection;