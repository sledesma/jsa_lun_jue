    /* Tres formas para incluir eventos
        1. Eventos en línea (HTML)
          +) Sintaxis clara
          -) Solo permite un evento a un elemento. No respeta el PRU
        2. Eventos en JavaScript mediante el DOM (JS)
          +) Sintaxis clara, respeta el PRU
          -) Solo permite un evento a un elemento. Conocimientos de JS básicos
        3. Eventos en JavaScript mediante la API EventTarget (JS)
    */
    // Dos cosas a identificar en una UI (para JavaScript)
    // 1. ¿Qué sucesos son importantes? (Eventos) - API Event -
    // 2. ¿Qué respuesta da JavaScript al ocurrir dichos sucesos? - API EventTarget -

    const div = document.querySelector('div');

    div.onclick = function() {
      Lista({
        ul: document.querySelector('#lista'),
        datos: ['Item 1', 'Item 2', 'Item 3'],
        onClick: function(item) {
          alert('Hiciste click en '+item)
        }
      })
    }