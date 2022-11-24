const video = document.querySelector('video');
const btn_player = document.querySelector('button');
let status = false;

function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function () {
    if(video.paused){
        this.media.play();
    }
    else{
        this.media.pause();
    }

}
const player = new MediaPlayer({ el: video });

btn_player.onclick = () => player.play();