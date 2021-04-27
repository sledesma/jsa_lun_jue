const campos = [
  'numEdad',
  'txtNombre',
  'campo2'
];

campos.forEach(function(campo) {
  CampoRequerido(document.querySelector('#'+campo))
})

document.querySelector('#btnValidar').onclick = function() {
  /*
  let 
    sePuedeValidar = true,
    esValido = false;

  campos.forEach(function(campo){
    if(Validaciones[campo] === undefined)
      sePuedeValidar = false;

    if(sePuedeValidar) {
      // proceder con la validacion
    } else {
      // no se puede validar
    }
  });
  */
  let esValido = true;

  campos.forEach(function(campo){
    if(Validaciones[campo] === undefined ||
    Validaciones[campo] === false) {
      esValido = false;
    }
  })

  console.log("¿Es valido?"+esValido);

}
