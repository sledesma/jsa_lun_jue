function Jsonable(object) {
  object.toJson = function() {
    return JSON.stringify(this);
  }

  object.fromJson = function(jsonText) {
    const json = JSON.parse(jsonText);
    for (const prop in json) {
      this[prop] = json[prop];
    }
  }

  return object;
}

function Loggeable(object) {
  object.log = function() {
    console.log(this);
  }

  return object;
}

function decorate(object, decorators) {
  let resultado = object;

  for (let i = 0; i < decorators.length; i++) {
    const deco = decorators[i];
    resultado = deco(resultado);
  }

  return resultado;
}

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let pr = new Producto('Celular', 2500);
pr = decorate(pr, [Jsonable, Loggeable]);

console.log(pr);
