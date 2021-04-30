function getCotizacionUsd() {
  /**
   * RESOLVER CON FETCH
   * Cross-Origin Resource Sharing
   */
  // 1. Crear la petición
  const xhr = new XMLHttpRequest();
  // 2. Abrir la conexión
  xhr.open('GET', 'https://api.estadisticasbcra.com/usd');
  // 3. Enviar la petición
  xhr.send();
  // 4. Recibir la respuesta (listener)
  xhr.addEventListener('load', function(){
    console.log(xhr);
  });
}

function getOneCharacter(id) {
  /**
   * RESOLVER CON FETCH
   */
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://superheroapi.com/api/538541800459062/'+id);
  xhr.send();
  xhr.addEventListener('load', function(){
    console.log(xhr);
  });
}

