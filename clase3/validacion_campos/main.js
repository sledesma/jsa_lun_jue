const campos = [
  'numEdad',
  'txtNombre',
  'campo2',
  'campoNumero'
];

CampoRequerido(document.querySelector('#numEdad'))
CampoRequerido(document.querySelector('#txtNombre'))
CampoRequerido(document.querySelector('#numEdad'))
CampoNumero(document.querySelector('#campoNumero'))

document.querySelector('#btnValidar').onclick = function() {
  let esValido = true;

  campos.forEach(function(campo){
    if(Validaciones[campo] === undefined ||
    Validaciones[campo] === false) {
      esValido = false;
    }
  })

  console.log("¿Es valido?"+esValido);

}
