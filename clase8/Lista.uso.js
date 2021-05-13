Lista.eventTarget.addEventListener('Lista_AddItem', function(){
  console.log('Agregando un nuevo item...');
});

Lista.init({
  ul: document.querySelector('#lista'),
  datos: [
    'Sebastian',
    'Clara',
    'Andres',
    'Jorgelina'
  ],
  onClick: function() {
    console.log('Hola')
  }
});
