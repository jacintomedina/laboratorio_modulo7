import { obtenerMensaje } from "./motor";

import {
  mensaje,
  muestraPuntuacion,
  dameCartaF,
  btnDameCarta,
  btnMePlanto,
  btnNuevaPartida,
  resetearPartida,
  deshabilitarMeplanto,
  finalizarPartida,
  mostrarMensaje,
} from "./ui";

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

if (
  btnDameCarta !== null &&
  btnDameCarta !== undefined &&
  btnDameCarta instanceof HTMLButtonElement
) {
  btnDameCarta.addEventListener("click", () => {
    dameCartaF();
  });
}

if (btnNuevaPartida) {
  btnNuevaPartida.addEventListener("click", resetearPartida);
}

if (
  btnMePlanto &&
  btnMePlanto instanceof HTMLButtonElement &&
  mensaje instanceof HTMLDivElement
) {
  btnMePlanto.addEventListener("click", () => {
    deshabilitarMeplanto(true);
    const mensaje = obtenerMensaje();
    mostrarMensaje(mensaje);
    finalizarPartida();
  });
}
