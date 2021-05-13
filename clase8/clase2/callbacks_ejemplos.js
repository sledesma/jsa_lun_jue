    // Entradas     - Operaciones - Salidas
    //                    F
    //  F (callback)
    //                                F (Funciones de orden superior)

    // Paradigma funcional -----> función!

    function calcular1y2(operacion) {
      const salida = operacion(1, 2);
      console.log(salida);
    }

    calcular1y2(function(n1, n2) {
      return (n1 + n2) / 2;
    });

    calcular1y2(function(n1, n2) {
      return n1 + n2;
    });