import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";

class AdsPlugin {
	private ads: Ads;
	private player: MediaPlayer;
	private media: HTMLMediaElement;
	private currentAd: Ad

	constructor() {
		this.ads = Ads.getInstance();
		this.handleTiemUpdate = this.handleTiemUpdate.bind(this);
	}

	run(player: MediaPlayer) {
		this.player = player;
		this.media = this.player.media;
		this.media.addEventListener('timeupdate', this.handleTiemUpdate);
	}

	private handleTiemUpdate() {
		const currentTime = Math.floor(this.media.currentTime);
		if(currentTime % 30 === 0){
			this.renderAd();
		}
	}

	private renderAd(){
		if(this.currentAd)
		{
			console.log('YA SALIO ', this.currentAd)
			return
		}
		const ad = this.ads.getAd()
		this.currentAd = ad
		console.log(this.currentAd)

		setTimeout(()=>{
			this.currentAd = null
		}, 10000)
	}
}

export default AdsPlugin;