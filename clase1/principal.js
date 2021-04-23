/**
 * Proceso LISTA
 *
 * Entradas:
 *    El UL en el cual vamos a estar insertando los elementos
 *    Los items a poner
 *
 * Salidas:
 *    Ninguna
 */
function Lista(ul, datos) {
	console.log("Cargando Lista");
  // ECMAScript 6
  // REDUCIR LA CANTIDAD DE CAMBIOS AL DOM
  const df = document.createDocumentFragment();
  let el = undefined;

	datos
		.map(function (item) {
      // Convertir item en un elemento del DOM    
			el = document.createElement('li');
      el.innerHTML = item;
      return el;
		})
		.forEach(function (liItem) {
      // Agregar elementos el df
      df.appendChild(liItem);
		});

  ul.appendChild(df);
}


