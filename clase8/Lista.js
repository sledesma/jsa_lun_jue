const Lista = {
	eventTarget: new EventTarget(),

	events: {
		onAddListItem: new Event("Lista_AddItem"),
	},

	init: function (opciones) {

		const ul = opciones.ul;
		const datos = opciones.datos;
		const onClick = opciones.onClick;

		console.log("Cargando Lista");
		// ECMAScript 6
		// REDUCIR LA CANTIDAD DE CAMBIOS AL DOM
		const df = document.createDocumentFragment();
		let el = undefined;

		datos
    // CIERRE
			.map((item) => {
        console.log(this);
				// Convertir item en un elemento del DOM
				el = document.createElement("li");
				el.innerHTML = item;
				el.onclick = function () {
					onClick(item);
				};

				return el;
			})
			.forEach((liItem) => {
				// Agregar elementos el df
				df.appendChild(liItem);
				this.eventTarget.dispatchEvent(
          this.events.onAddListItem
        );
			});

		ul.appendChild(df);
	},
};
