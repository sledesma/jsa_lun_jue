class NavigateEvent extends Event {
  constructor(ruta) {
    super('navigate');
    this.nuevaRuta = ruta
  }
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
        
        this.getRoute(e.target.getAttribute("href")).then( (ruta) => {
          document.querySelectorAll(".router-view").forEach( (rv) => {
            rv.innerHTML = ruta.contenidoActual;
          });
  
          if(ruta.onLoad) ruta.onLoad();
          
          history.pushState({path: ruta.path, renderUrl: ruta.renderUrl}, "");
        });
      });
    });
  }

  async getRoute(path) {
    this.dispatchEvent(this.events.onNavigate(path));
  
    const ruta = this.paths.find(function (valor) {
      return valor.path == path;
    });
  
    if (!ruta) return false;
  
    const resPagina = await fetch(ruta.renderUrl);
    const contenido = await resPagina.text();
  
    ruta.contenidoActual = contenido;
  
    return ruta;
  }

}