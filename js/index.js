import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('.video__movie');
const buttonPlay = document.querySelector('.video__playButton');
const buttonMute = document.querySelector('.video__muteButton');

const player = new MediaPlayer({
	video: video,
	plugins: [
		//new AutoPlay(),
	],
});

buttonPlay.onclick = () => player.playPause();

buttonMute.onclick = () => player.muteUnmute();