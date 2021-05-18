(function (global) {
	/* Privada */
	function PathDict() {
		this.fromArray = function (data) {
			data.forEach((item) => {
				this.push(item);
			});
		};

		this.getPath = function (path) {
			return this.find((val) => {
				return val.path == path;
			});
		};
	}
	PathDict.prototype = Array.prototype;

	/* Abstract */
	const Router = {
		routerLinkSelector: ".router-link",
		routerViewSelector: ".router-view",
		paths: new PathDict(),
		registerListeners: function () {
			console.log("Registrando listeners");
		},
		navigate: function (path) {
			console.log("Navegando hacia la siguiente ruta: ", path);
		},
		doAction: function (path) {
			console.log("Ejecutando la siguiente acción: ", path.action);
			const action = path.action;
			switch (action.type) {
				case "render":
					document
						.querySelectorAll(this.routerViewSelector)
						.forEach((vw) => {
              vw.innerHTML = action.content;
            });
					break;

				case "lazy-load":
          const xhr = new XMLHttpRequest();
          xhr.open('GET', action.content);
          xhr.send();
          xhr.onload = () => {
            document
						.querySelectorAll(this.routerViewSelector)
						.forEach((vw) => {
              vw.innerHTML = xhr.response;
            });
          }
					break;
			}
		},
	};

	function HistoryRouter(pathDict) {}
	HistoryRouter.prototype = Router;

	function HashRouter(pathDict) {
		this.paths.fromArray(pathDict);

		this.links = document.querySelectorAll(this.routerLinkSelector);

		this.navigate = function (path) {
			location.hash = "#" + path.path;
		};

		this.registerListeners = function () {
			global.onhashchange = (e) => {
				const ruta = e.newURL.split("#")[1];
				const path = this.paths.getPath(ruta);
				this.doAction(path);
			};

			this.links.forEach((lnk) => {
				lnk.addEventListener("click", (e) => {
					e.preventDefault();

					const path = this.paths.getPath(e.target.getAttribute("href"));

					this.navigate(path);
				});
			});
		};

		// Iniciando el hashRouter
		this.registerListeners();
	}
	HashRouter.prototype = Router;

	global.HistoryRouter = HistoryRouter;
	global.HashRouter = HashRouter;
  
})(window);