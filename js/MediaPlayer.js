// Class
class MediaPlayer {
	constructor({
		video,
		plugins = [],
	}) {
		this.media = video;
		this.plugins = plugins;

		this._initPlugins();
	}

	_initPlugins(){
		this.plugins.forEach(plugin => {
			plugin.run(this);
		})
	}
	
	muteUnmute(){
		this.media.muted = !this.media.muted;
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

export default MediaPlayer;