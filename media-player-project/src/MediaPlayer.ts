// Class
class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;

	constructor(
		video:HTMLMediaElement,
		plugins:Array<any> = [],
	) {
		this.media = video;
		this.plugins = plugins;

		this.initPlugins();
	}

	private initPlugins(){
		this.plugins.forEach(plugin => {
			plugin.run(this);
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