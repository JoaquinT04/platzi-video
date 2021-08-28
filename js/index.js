import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('.video__movie');
const buttonPlay = document.querySelector('.video__playButton');
const buttonMute = document.querySelector('.video__muteButton');

const player = new MediaPlayer({
	video: video,
	plugins: [
		new AutoPlay(),
		new AutoPause(),
	],
});

buttonPlay.onclick = () => player.playPause();

buttonMute.onclick = () => player.muteUnmute();


if ('serviceWorker' in navigator){
	navigator.serviceWorker.register('../sw.js').catch(error => {
		console.log(error.message);
	})
}