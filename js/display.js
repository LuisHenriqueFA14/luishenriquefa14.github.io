class Display {
	showProjects() {
		document.getElementById('projects').style.display = "block"
		document.getElementById('projects').style.animation = 'showProjects 1s .5s none normal'
		setTimeout(() => {
			document.getElementById('projects').style.top = "0"
		}, 1480)
	}

	closeProjects() {
		document.getElementById('projects').style.animation = 'hideProjects 1.5s none normal'
		setTimeout(() => {
			document.getElementById('projects').style.top = "100%"
			document.getElementById('projects').style.display = "none"
		}, 1480)
	}

	showAboutMe() {
		document.getElementById('about_me').style.display = "block"
		document.getElementById('about_me').style.animation = 'showAboutMe 1s .5s none normal'
		setTimeout(() => {
			document.getElementById('about_me').style.top = "0"
		}, 1480)
	}

	closeAboutMe() {
		document.getElementById('about_me').style.animation = 'hideAboutMe 1.5s none normal'
		setTimeout(() => {
			document.getElementById('about_me').style.top = "100%"
			document.getElementById('about_me').style.display = "none"
		}, 1480)
	}
}

export { Display }