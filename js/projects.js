const projects = document.getElementById("projects")

function createProject(name, description, html_url) {
	const html = `<a href="${html_url}"><div class="project"><div class="project-top">${name}</div> <div class="project-bottom"><p>${description}</p></div></div></a>`;

	projects.innerHTML += html;
}

function renderProjects(json) {
	for(let j = 0; j < json.length; j += 1) {
		const name = json[j].name;
		let description;
		const html_url = json[j].html_url;

		if(!json[j].description) {
			description = "Description not provided.";
		} else {
			description = json[j].description;
		}

		createProject(name, description, html_url);
	}
}

async function getData(data) {
	const json = await data.json();

	return json;
}

fetch('https://api.github.com/users/LuisHenriqueFA14/repos')
	.then(getData)
	.then(renderProjects);
