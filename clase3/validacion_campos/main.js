/**
 * AMBITO GLOBAL
**/
let Validaciones = {};


/**
 * Nombre: CampoRequerido
 * Descripcion: validar si un campo está vacío o no al momento de pasar al siguiente campo
 * Opciones:
 *    campo (DOM Element)
 */
function CampoRequerido(campo) {
  // Eventos

  /**
   * Event (Event): blur
   * Target (EventTarget): campo
   * Callback (EventTarget): validar si está vacío o no
   */
  campo.addEventListener('blur', function(){
    if(campo.value == '') {
      Validaciones[campo.id] = false
    } else {
      Validaciones[campo.id] = true
    }
  });

}

