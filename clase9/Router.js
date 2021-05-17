(function(){ // Actuaría a modo de "namespace"

  class NavigateEvent extends Event {
    constructor(ruta) {
      super('navigate');
      this.nuevaRuta = ruta
    }
  }

  async function getRoute(path, router) {
    router.dispatchEvent(router.events.onNavigate(path));
  
    const ruta = router.paths.find(function (valor) {
      return valor.path == path;
    });
  
    if (!ruta) return false;
  
    const resPagina = await fetch(ruta.renderUrl);
    const contenido = await resPagina.text();
  
    ruta.contenidoActual = contenido;
  
    return ruta;
  }
  

  class Router extends EventTarget {
  
    constructor(paths) {
      super();
      this.paths = paths;
      this.events = {
        onNavigate: (nuevaRuta) => new NavigateEvent(nuevaRuta) 
      }
    }
  
    listen() {
      document.querySelectorAll(".router-link").forEach( (routerLink) => {
        routerLink.addEventListener("click", (e) => {
          e.preventDefault();
          
          getRoute(
            e.target.getAttribute("href"),
            this
          ).then( (ruta) => {
            document.querySelectorAll(".router-view").forEach( (rv) => {
              rv.innerHTML = ruta.contenidoActual;
            });
    
            if(ruta.onLoad) ruta.onLoad();
            
            history.pushState({path: ruta.path, renderUrl: ruta.renderUrl}, "");
          });
        });
      });
    }
  
  }

  window.Router = Router;

})()

