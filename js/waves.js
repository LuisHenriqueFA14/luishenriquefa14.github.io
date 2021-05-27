class Waves {
	constructor(wave) {
		this.wave = document.getElementById('third_wave')
	}
	toTop() {
		this.wave.style.left = "0px"
		this.wave.style.zIndex = "2"
		this.wave.style.animation = "comeBack 0.5s ease-in-out infinite alternate"
		setTimeout(() => {
			this.wave.style.animation = "flyingWave 1s ease normal"
		}, 500)
	}
	toDown() {
		this.wave.style.left = "0px"
		this.wave.style.animation = "returningWave 1.5s ease normal"
		setTimeout(() => {
			this.wave.style.animation = "comeBack 3s ease-in-out infinite alternate"
			this.wave.style.zIndex = "-1"
		}, 1500)
	}
}

export { Waves }