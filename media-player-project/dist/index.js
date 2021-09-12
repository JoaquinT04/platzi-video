"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaPlayer_1 = require("./MediaPlayer");
const AutoPlay_1 = require("./plugins/AutoPlay");
const AutoPause_1 = require("./plugins/AutoPause");
const video = document.querySelector('.video__movie');
const buttonPlay = document.querySelector('.video__playButton');
const buttonMute = document.querySelector('.video__muteButton');
const player = new MediaPlayer_1.MediaPlayer(video, [
    new AutoPlay_1.AutoPlay(),
    new AutoPause_1.AutoPause(),
]);
buttonPlay.onclick = () => player.playPause();
buttonMute.onclick = () => player.muteUnmute();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    });
}
