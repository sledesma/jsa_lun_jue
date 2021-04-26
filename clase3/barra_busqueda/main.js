/**
 * Nombre del componente: BarraBusqueda
 * Descripción: Un campo de texto que, al ingresar datos, actualiza el contenido de un ul
 * Opciones necesarias:
 *    > campo de texto (DOM Element)
 *    > ul donde va a imprirmir los datos (DOM Element)
 *    > datos en sí (array)
 * 
 */
function BarraBusqueda(opciones) {
  const
    campoTexto = opciones.campoTexto,
    ulDestino = opciones.ulDestino,
    datos = opciones.datos;

  // Eventos

  /**
   * Evento (Event): input
   * Lugar donde ocurre el evento (EventTarget): campoTexto
   * Lo que desencadena ese evento (EventTarget): actualizar el contenido de ulDestino
   */
  campoTexto.addEventListener('input', function(){
    const df = document.createDocumentFragment();
    let aux_el = null;

    ulDestino.innerHTML = ''
    
    datos
      .filter(function(valor){
        /*
        const
          valorMay = valor.toUpperCase(),
          campoTextoValMay = campoTexto.value.toUpperCase();
        return valorMay.includes(campoTextoValMay);
        */
       return valor.toUpperCase().includes(campoTexto.value.toUpperCase());
      })
      .forEach(function(valor){
        aux_el = document.createElement('li');
        aux_el.innerText = valor;
        df.appendChild(aux_el);
      });

    ulDestino.appendChild(df);
  });
}
