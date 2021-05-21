// Publicacion / Subscripcion
// DESACOPLAMIENTO

// EventTarget / Event => UN OBSERVER NATIVO

addEventListener('click', function() {
  console.log('hola');
})

dispatchEvent(new Event('click'));

class FormErrors {
  constructor() {
    this.errores = []
  }
  
   // Sub
  agregarError(error) {
    this.errores.push(error);
  }
  
  // Pub
  hayErrores() {
    return this.errores.length !== 0;
  }
}