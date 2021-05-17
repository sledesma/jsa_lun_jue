using System;

namespace Productos {

  public class Producto {

    public int id {get; set;}

    public string nombre {get; set;}

    public void saludar() {
      Console.WriteLine("Hola, me llamo "+this.nombre);
    }

  }

}