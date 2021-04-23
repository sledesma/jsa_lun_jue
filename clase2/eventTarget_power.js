			/*
    3. Eventos en JavaScript mediante la API EventTarget (JS)
    */
			// Dos cosas a identificar en una UI (para JavaScript)
			// 1. ¿Qué sucesos son importantes? (Eventos) - API Event -
			// 2. ¿Qué respuesta da JavaScript al ocurrir dichos sucesos? - API EventTarget -

			/*
    API Event
    F (funciones)
    E (eventos)
    O (objetos): Event
    */

			/*
    API EventTarget
    F (funciones)
    E (eventos)
    O (objetos): EventTarget
    */

			/*
    const eventoSebas = new Event('eventSebas');

    const elementoEnElQueEventoSebasPuedeOcurrir = new EventTarget();

    elementoEnElQueEventoSebasPuedeOcurrir.addEventListener('eventSebas', function(){
      console.log('Otro callback baby!')
    })

    elementoEnElQueEventoSebasPuedeOcurrir.addEventListener('eventSebas', function(){
      console.log('El evento sebas IS ON!')
    })


    document.querySelector('div').onclick = function() {
      elementoEnElQueEventoSebasPuedeOcurrir.dispatchEvent(eventoSebas);
    }
    */


    ListaEventTarget.addEventListener('Lista_AddItem', function(){
      console.log('Agregando un item a la lista');
    });

			Lista({
				ul: document.querySelector("#lista"),
				datos: ["Item 1", "Item 2", "Item 3"],
				onClick: function (item) {
					alert("Hiciste click en " + item);
				},
			});