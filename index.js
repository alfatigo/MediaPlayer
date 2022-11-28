import MediaPlayer from './Scripts/MediaPlayer.js';
import AutoPlay from './Scripts/plugins/AutoPlayer.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins:[ new AutoPlay()]
});

const btn_player = document.querySelector('#Btn__playAndPause');
const btn_Audio = document.querySelector('#Btn__muteAndUnmute');
btn_player.onclick = () => player.togglePlay();
btn_Audio.onclick = () => player.toggleAudio();