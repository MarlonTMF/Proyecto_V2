import ejecutarSecuencia from "./auto.js"

describe('Simulador de Autitos', () => {
test('Debe mostrar la posición inicial del auto', () => {
    expect(ejecutarSecuencia('5,5/1,2N/')).toBe('1,2N');
  });

test('Debe girar a la derecha correctamente', () => {
  expect(ejecutarSecuencia('5,5/1,2N/DDD')).toBe('1,2O');
  });
test('Debe girar a la izquierda correctamente', () => {
    expect(ejecutarSecuencia('5,5/1,2N/III')).toBe('1,2E');
  });

test('Debe avanzar correctamente', () => {
    expect(ejecutarSecuencia('5,5/1,2N/ADIIIDA')).toBe('0,3O');
  });
test('Debe omitir comandos que hacen que el auto se salga del grid', () => {
    expect(ejecutarSecuencia('5,5/1,2N/AAAAAAAAA')).toBe('1,5N');
  });

test('Debe devolver la posición final correcta para el ejemplo 1', () => {
  expect(ejecutarSecuencia('5,5/1,2N/IAIAIAIAA')).toBe('1,3N');
  });
test('Debe devolver la posición final correcta para el ejemplo 2', () => {
    expect(ejecutarSecuencia('5,5/3,3E/AADAADADDA')).toBe('5,1E');
  });
  test('Debe manejar el borde de la superficie correctamente', () => {
    expect(ejecutarSecuencia('5,5/0,0S/AA')).toBe('0,0S');
  });

});