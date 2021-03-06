"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoPause = void 0;
class AutoPause {
    constructor() {
        this.threshold = 0.25; // 25% de la pantalla
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    handleIntersection(entries) {
        const entry = entries[0];
        if (entry.isIntersecting) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
}
exports.AutoPause = AutoPause;
