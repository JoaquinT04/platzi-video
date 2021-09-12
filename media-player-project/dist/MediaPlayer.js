"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayer = void 0;
// Class
class MediaPlayer {
    constructor(video, plugins = []) {
        this.media = video;
        this.plugins = plugins;
        this.initPlugins();
    }
    initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    muteUnmute() {
        this.media.muted = !this.media.muted;
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    playPause() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
}
exports.MediaPlayer = MediaPlayer;
