import { Display } from './display.js'
import { Waves } from './waves.js'

const about_me_button = document.getElementById('about_me_button')
const return_about_me_button = document.getElementById('return_about_me_button')

const display = new Display();
const waves = new Waves();

function activate_about_me() {
	waves.toTop();
	display.showAboutMe();
}

function return_about_me() {
	waves.toDown()
	display.closeAboutMe()
}

about_me_button.addEventListener('click', activate_about_me)
return_about_me_button.addEventListener('click', return_about_me)