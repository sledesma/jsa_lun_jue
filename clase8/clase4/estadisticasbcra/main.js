document
  .querySelector('button')
  .addEventListener('click', function(){
    getOnePlanet(2, function(planets){
      console.log(planets);
    });
  });
