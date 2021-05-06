const PaletaColoresEventTarget = new EventTarget();

function PaletaColores(opciones) {

  const main = document.querySelector(opciones.dropzone);
  const circulos = document.querySelectorAll(opciones.items);

  // Eventos relativos a la ZONA DE ARRASTRE

  main.addEventListener('dragover', function(e){
    e.preventDefault();
  });

  main.addEventListener('drop', function(e){
    e.preventDefault();
    e.dataTransfer.items[0].getAsString(function(valor){
      main.style.backgroundColor = valor;
      PaletaColoresEventTarget.dispatchEvent(new Event('leerItem'));
    });
    PaletaColoresEventTarget.dispatchEvent(new Event('terminoOperacion'));
  });

  // Eventos relativos a los ITEMS QUE SE ARRASTRAN

  circulos.forEach(function(circulo){
    circulo.draggable = true;
    circulo.addEventListener('dragstart', function(e){
      e.dataTransfer.items.add(circulo.style.backgroundColor, 'color_fondo');
      PaletaColoresEventTarget.dispatchEvent(new Event('agregarItem'));
    });
  });

}