"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoPlay = void 0;
class AutoPlay {
    constructor() { }
    run(player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}
exports.AutoPlay = AutoPlay;
exports.default = AutoPlay;
