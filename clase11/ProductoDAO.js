(function (global) {
	// Data (conexión con el origen de datos)
	class DataSource {
		async getAll() {
			return "Obteniendo todos los datos";
		}

    async write(data) {
      return "Escritura";
    }
	}

	class APIDataSource extends DataSource {
		constructor(uri) {
			super();
			Object.defineProperty(this, "uri", {
				value: uri,
				writable: false,
			});
		}

		async getAll() {
      const res = await fetch(this.uri);
      const json = await res.json();
      return json;
    }
	}

	class LocalStorageDataSource extends DataSource {
    constructor() {
      super();
    }

    async getAll() {
      return JSON.parse(localStorage.getItem('PRODUCTOS_TODOS'));
    }

    async write(data) {
      localStorage.setItem('PRODUCTOS_TODOS', JSON.stringify(data));
    }

  }

	// Adapter (medio entre el objeto y los datos)
	class ProductoAdapter {

		constructor(dataSource) {
			Object.defineProperty(this, "dataSource", {
				value: dataSource,
				writable: false,
			});	
		}

		async getAll() {
			const data = await this.dataSource.getAll();

			return data.map(function(val){
				return new Producto(val)
			});
		}

	}

	// Object (entidad que mapea los datos)
	function Producto({ id, precio, nombre, material, descripcion }) {
		Object.defineProperties(this, {
			id: {
				value: id,
				writable: false,
			},
			precio: {
				value: precio,
				writable: false,
			},
			nombre: {
				value: nombre,
				writable: false,
			},
			material: {
				value: material,
				writable: false,
			},
			descripcion: {
				value: descripcion,
				writable: false,
			},
		});
	}

  /// Punto de entrada de la aplicacion

	class AdapterEvent extends Event {
		constructor(type, adapter) {
			super(type);
			this.adapter = adapter;
		}
	}

	class ProductoDAO extends EventTarget {

		constructor() {
			super();
		}

		async init() {

			const apiDataSource = new APIDataSource('https://60b0208b1f26610017ffdd2d.mockapi.io/productos')
			const lsDataSource = new LocalStorageDataSource();
	
			let adapter = null;
	
			let productosStorage = await lsDataSource.getAll();
	
			if(productosStorage === null) {
				adapter = new ProductoAdapter(apiDataSource);
			} else {
				adapter = new ProductoAdapter(lsDataSource);
			}
	
			this.dispatchEvent(new AdapterEvent('oninit', adapter));

		}

	}


	global.ProductoDAO = ProductoDAO;

})(window);
