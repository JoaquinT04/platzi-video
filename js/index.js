import MediaPlayer from "./MediaPlayer";

const video = document.querySelector('.video__movie');
const button = document.querySelector('.video__playButton');

const player = new MediaPlayer({video: video});

button.onclick = () => player.playPause();
