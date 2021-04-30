function getAllPlanets(callback){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://swapi.dev/api/planets/');
  xhr.responseType = "json"
  xhr.send();
  xhr.addEventListener('load', function(){
    callback(xhr.response);
  });
}

function getOnePlanet(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://swapi.dev/api/planets/'+id);
  xhr.responseType = "json"
  xhr.send();
  xhr.addEventListener('load', function(){
    callback(xhr.response);
  });
}
