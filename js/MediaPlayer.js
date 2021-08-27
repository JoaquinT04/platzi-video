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
		const player = {
			play: () => this.play(),
			pause: () => this.pause(),
			media: this.media,
			get muted(){
				return this.media.muted;
			}, 

			set muted(value){
				this.media.muted = value;
			},
		};
		
		this.plugins.forEach(plugin => {
			plugin.run(player);
		})
	}
	
	muteUnmute(){
		this.media.muted = !this.media.muted;
	}

	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	playPause(){
		if(this.media.paused){
			this.play();
		}
		else{
			this.pause();
		}
	}
}

export default MediaPlayer;