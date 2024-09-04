function ejecutarSecuencia(comandos){
    const [dimensiones, posicionInicial, secuencia] = comandos.split('/');
    const [maxX, maxY] = dimensiones.split(',').map(Number);
    let [x, y, direccion] = [parseInt(posicionInicial[0]), parseInt(posicionInicial[2]), posicionInicial[3]];

    for (let comando of secuencia) {
        if (comando === 'D') {
          direccion = girarDerecha(direccion);
        }
    }

    return `${x},${y}${direccion}`;
}

function girarDerecha(direccion) {
    const giros = { 'N': 'E', 'E': 'S', 'S': 'O', 'O': 'N' };
    return giros[direccion];
  }

export default ejecutarSecuencia;
