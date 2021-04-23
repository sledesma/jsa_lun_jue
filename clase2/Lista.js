const ListaEventTarget = new EventTarget();

const OnAddListaItem = new Event('Lista_AddItem');

function Lista(opciones) {
  const ul = opciones.ul;
  const datos = opciones.datos;
  const onClick = opciones.onClick;

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
      el.onclick = function() {
        onClick(item);
      }

      return el;
		})
		.forEach(function (liItem) {
      // Agregar elementos el df
      df.appendChild(liItem);
      ListaEventTarget.dispatchEvent(OnAddListaItem);
		});

  ul.appendChild(df);
}
