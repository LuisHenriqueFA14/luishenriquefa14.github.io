class Api {
	async getContent() {
		const data = await fetch('https://api.github.com/users/luishenriquefa14/repos')
		const jsonData = await data.json()
		return jsonData;
	}

	getHtml(info) {
		const html =`<div class="repo_project">
						<a href="${info.html_url}">
							<h2>${info.name == "luishenriquefa14.github.io" ? "github.io" : info.name}</h2>
							<h4>${info.description != null ? info.description : ''}</h4>
						</a>
					</div><br>`
		return html;
	}
}

export { Api }