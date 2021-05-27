import { Display } from './display.js'
import { Waves } from './waves.js'
import { Api } from './gh_api.js'

const projects_button = document.getElementById('projects_button')
const return_projects_button = document.getElementById('return_projects_button')
const projects_content = document.getElementById('projects_content')

const display = new Display();
const waves = new Waves();
const api = new Api();

function activate_projects() {
	waves.toTop();
	display.showProjects();
}

function return_projects() {
	waves.toDown()
	display.closeProjects()
}

async function renderProjects() {
	const projects = await api.getContent()
	for(let proj in await projects) {
		projects_content.innerHTML += api.getHtml(projects[proj]);
	}
}

projects_button.addEventListener('click', activate_projects)
return_projects_button.addEventListener('click', return_projects)
renderProjects();