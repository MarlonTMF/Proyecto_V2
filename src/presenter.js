import ejecutarSecuencia from "./auto";

const comandosInput = document.querySelector("#comandos");
const form = document.querySelector("#comandos-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandos = comandosInput.value;
  const [dimensiones, posicionInicial, secuencia] = comandos.split('/');

  const posicionFinal = ejecutarSecuencia(comandos);
    resultadoDiv.innerHTML = `
      <p>Posición Inicial: ${posicionInicial}</p>
      <p>Comandos: ${secuencia}</p>
      <p>Posición Final: ${posicionFinal}</p>
    `;
});
