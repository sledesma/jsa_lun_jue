import 'reflect-metadata';

function Log(): ClassDecorator {
  return (target) => {
    console.log('Creando:', target);
  }
}

interface IClienteOptions {
  nombre: string;
}

function Cliente(opciones: IClienteOptions): ClassDecorator {
  return (traget) => {
    Reflect.defineMetadata('NOMBRE_CLIENTE', opciones.nombre, traget);
    console.log('Alta del cliente: ', opciones.nombre);
  }
}

@Cliente({
  nombre: 'Carlos'
})
class CarlosAcosta {}


class App {

  clientes: any[];

  constructor(clientes: any[]) {
    this.clientes = clientes;
  }

  verNombre() {
    for (let i = 0; i < this.clientes.length; i++) {
      const cli = this.clientes[i];
      const nombre = Reflect.getMetadata('NOMBRE_CLIENTE', cli);
      console.log(nombre);
    }
  }
}

const app = new App([
  CarlosAcosta
]);

app.verNombre();