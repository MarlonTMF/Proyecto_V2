import ejecutarSecuencia from "./auto.js"

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