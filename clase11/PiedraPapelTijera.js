function PiedraPapelTijera(opcionJugador) {

  const opciones = ['pi', 'pa', 'ti'];
  const indiceOpcionMaquina = Math.floor(Math.random() * 3);
  const opcionMaquina = opciones[indiceOpcionMaquina];

  const juego = opcionJugador + opcionMaquina;

  console.log('JUGADOR', opcionJugador);
  console.log('MAQUINA', opcionMaquina);

  switch(juego) {
    case 'pipi':
    case 'papa':
    case 'titi':
      return 0;

    case 'piti':
    case 'tipa':
    case 'papi':
      return 1;

    case 'tipi':
    case 'pati':
    case 'pipa':
      return -1;
  }

}

console.log(PiedraPapelTijera('pi'));