function ejecutarSecuencia(comandos){
    const [dimensiones, posicionInicial, secuencia] = comandos.split('/');
    const [maxX, maxY] = dimensiones.split(',').map(Number);
    let [x, y, direccion] = [parseInt(posicionInicial[0]), parseInt(posicionInicial[2]), posicionInicial[3]];

    return `${x},${y}${direccion}`;
}
export default ejecutarSecuencia;