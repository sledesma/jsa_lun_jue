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


function CampoEmail(campo) {
  // Eventos

  /**
   * Event (Event): blur
   * Target (EventTarget): campo
   * Callback (EventTarget): validar si está vacío o no
   */
  campo.addEventListener('blur', function(){
    const exp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]*$/ )
    if(exp.test(campo.value)) {
      Validaciones[campo.id] = true
    } else {
      Validaciones[campo.id] = false
    }
  });
}

function CampoNumero(campo) {
  // Eventos
  /**
   * Event (Event): blur
   * Target (EventTarget): campo
   * Callback (EventTarget): validar si está vacío o no
   */
  campo.addEventListener('blur', function(){
    const exp = new RegExp(/\d/)
    if(exp.test(campo.value)) {
      Validaciones[campo.id] = true
    } else {
      Validaciones[campo.id] = false
    }
  });

}