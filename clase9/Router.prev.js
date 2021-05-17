function Router(opciones) {
	const paths = opciones.paths;


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
