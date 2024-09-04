import ejecutarSecuencia from "./auto.js"

test('Debe mostrar la posición inicial del auto', () => {
    expect(ejecutarSecuencia('5,5/1,2N/')).toBe('1,2N');
  });

test('Debe girar a la derecha correctamente', () => {
  expect(ejecutarSecuencia('5,5/1,2N/DDD')).toBe('1,2O');
  });