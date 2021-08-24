// Class
class MediaPlayer {
	constructor({
		video,
	}) {
		this.media = video;
	}
	
	playPause(){
		if(this.media.paused){
			this.media.play();
		}
		else{
			this.media.pause();
		}
	}
}


const video = document.querySelector('.video__movie');
const button = document.querySelector('.video__playButton');

const player = new MediaPlayer({video: video})

button.onclick = () => player.playPause();