const singleton = (constructor, args) => (function(){
  
  let nros = null;

  if(nros == null) {
    nros = new constructor(args);
  }

  return nros;

})()

const numeros = singleton(function(args) {
  console.log('Construyendo números...');
  this.n1 = args.n1;
  this.n2 = args.n2;
}, { n1: 20, n2: 40 });

console.log(numeros);

console.log(numeros);

console.log(numeros);