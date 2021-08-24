export default MediaPlayer;

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
