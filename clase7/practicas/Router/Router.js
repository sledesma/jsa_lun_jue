function Router(opciones) {
	const paths = opciones.paths;

	document.querySelectorAll(".router-link").forEach(function (routerLink) {
		routerLink.addEventListener("click", function (e) {
			e.preventDefault();

			getRoute(e.target.getAttribute("href"), paths).then(function (ruta) {
				document.querySelectorAll(".router-view").forEach(function (rv) {
					rv.innerHTML = ruta.contenidoActual;
				});

				if(ruta.onLoad) ruta.onLoad();
				
				history.pushState({path: ruta.path, renderUrl: ruta.renderUrl}, "");
			});
		});
	});
}

async function getRoute(path, paths) {
	console.log("Navegando a " + path);

	const ruta = paths.find(function (valor) {
		return valor.path == path;
	});

	if (!ruta) return false;

	const resPagina = await fetch(ruta.renderUrl);
	const contenido = await resPagina.text();

	ruta.contenidoActual = contenido;

	return ruta;
}
