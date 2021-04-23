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

	// 1. item de datos => <li>item</li>

	/* Version 1
  var nuevosDatos = [];
  datos.forEach(function(item){
    nuevosDatos.push(
      '<li>'+item+'</li>'
    );
  });

  console.log(nuevosDatos);
  */
	// Version 2
	datos
		.map(function (item) {
			return "<li>" + item + "</li>";
		})
		.forEach(function (liItem) {
      ul.innerHTML += liItem
		});
		/*
		S = 5
		E = 3
		B = 8
		A = 4
		S = 5

		Item 1 ==map==> <li>Item 1</li>
		Item 2 ==map==> <li>Item 2</li>
		*/

	/**
	 * Proceso
	 *
	 * entradas => operaciones => salidas
	 * función  =>  función    => función
	 *
	 */
}
