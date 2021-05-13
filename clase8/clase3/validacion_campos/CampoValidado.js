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
function CampoValidado(opciones) {
  const 
    campo = opciones.campo,
    validacion = opciones.validacion,
    evento = opciones.evento
  // Eventos

  /**
   * Event (Event): blur
   * Target (EventTarget): campo
   * Callback (EventTarget): validar si está vacío o no
   */
  campo.addEventListener(evento, function(){
    Validaciones[campo.id] = validacion(campo.value);
  });

}