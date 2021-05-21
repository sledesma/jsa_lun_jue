interface INumeros {
  n1: number;
  n2: number;
}

function sumar(calculadora: INumeros) {
  calculadora.n1 = calculadora.n1 + calculadora.n2;
}

function leer(calculadora: INumeros) {
  return calculadora.n1
}


const numeros: INumeros = (function(constructor){
  
  let nros: INumeros = null;

  if(nros == null) {
    nros = new constructor(2, 2);
  }

  return nros;

})(class aux implements INumeros {
  n1: number;
  n2: number;

  constructor(n1: number, n2: number) {
    console.log('Construyendo números...');
    this.n1 = n1;
    this.n2 = n2;
  }
})



sumar(numeros)
console.log(leer(numeros))