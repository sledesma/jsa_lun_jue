// Clases en JS

// JavaScript NO es un lenguaje basado en clases
// Las clases son AZUCAR SINTACTICO

// Dos problemas
// 1. Js es (casi)IMPRESCINDIBLE
// 2. Js se basa en PROTOTIPOS y el resto de los mortales, en CLASES

// PHP + MySQL => Bootstrap + jQuery
// Laravel + MySQL/PostgreSQL => React / Vue
// C#.Net + SQL Server => Angular.Js

/*
function Producto() {
  this.id = 0;
  this.nombre = '';

  this.saludar = function() {
    console.log("Hola, me llamo "+this.nombre);
  }
}
*/


class TransmisionManual {
  constructor() {
    this.cantidadCambios = 4
  }
}

class RenaultDuster extends TransmisionManual {
  constructor() {
    super();
  }
}

class Boton extends HTMLButtonElement {
  constructor() {
    super()
  }

  log() {
    console.log('Creando XHR')
  }
}
const r = new Boton();
console.log(r);
/*
class Producto {

  constructor() {
    this.id = 0;
    this.nombre = '';
  }

  saludar() {
    console.log("Hola, me llamo "+this.nombre);
  }

}
*/
