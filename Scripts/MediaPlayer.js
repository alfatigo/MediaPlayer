class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }


    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    muted() {
        this.media.muted = true;
    }

    unmuted() {
        this.media.muted = false;
    }

    toggleAudio() {
        if (!this.media.muted) {
            this.muted();

        } else {
            this.unmuted();
        }
        console.log(this.media.muted)
    }
}
export default MediaPlayer;