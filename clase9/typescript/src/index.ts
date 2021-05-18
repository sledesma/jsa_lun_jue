console.log("Hola mundo!");

interface Path {
	path: string;
	action: {
		type: string;
		content: string;
	};
}

class PathDict extends Array<Path> {
	constructor() {
		super();
	}

	fromArray(data: Path[]) {
		data.forEach((item) => {
			this.push(item);
		});
	}

	getPath(path: string) {
		return this.find((val) => {
			return val.path == path;
		});
	}
}

class Router {
  protected paths: PathDict;

	constructor( paths: Path[],
		protected routerLinkSelector: string = '.router-link',
		protected routerViewSelector: string = '.router-view',
	) {
    this.paths.fromArray(paths);
  }

	registerListeners() {
		console.log("Registrando listeners");
	}

	navigate(path: Path) {
		console.log("Navegando hacia la siguiente ruta: ", path.path);
	}

	doAction(path: Path) {
		console.log("Ejecutando la siguiente acción: ", path.action);
		const action = path.action;
		switch (action.type) {
			case "render":
				document.querySelectorAll(this.routerViewSelector).forEach((vw) => {
					vw.innerHTML = action.content;
				});
				break;

			case "lazy-load":
				const xhr = new XMLHttpRequest();
				xhr.open("GET", action.content);
				xhr.send();
				xhr.onload = () => {
					document.querySelectorAll(this.routerViewSelector).forEach((vw) => {
						vw.innerHTML = xhr.response;
					});
				};
				break;
		}
	}
}

class HashRouter extends Router {

  private links: NodeListOf<HTMLAnchorElement>;

  constructor(paths: Path[]) {
    super(paths);

    this.links = document.querySelectorAll(this.routerLinkSelector);

    this.registerListeners();
  }

  navigate(path: Path) {
    location.hash = "#" + path.path;
  }

  registerListeners() {
    global.onhashchange = (e) => {
      const ruta = e.newURL.split("#")[1];
      const path = this.paths.getPath(ruta);
      this.doAction(path);
    };

    this.links.forEach((lnk) => {

      lnk.addEventListener("click", (e) => {
        e.preventDefault();

        const path = this.paths.getPath(lnk.getAttribute("href"));

        this.navigate(path);
      });
    });
  };
}