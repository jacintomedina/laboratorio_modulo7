import { partida } from "./modelo";
import {
  dameNumeroAleatorio,
  dameCarta,
  obtenerValorCarta,
  obtenerUrlCarta,
  sumarPuntos,
  actualizarPuntuacionUsuario,
  obtenerMensaje,
} from "./motor";

export const mensaje = document.getElementById("mensaje-juego");

export let cartaVisible = document.getElementById("carta-visible");

export const muestraPuntuacion = (): void => {
  let puntuacion = document.getElementById("puntuacion");
  if (puntuacion && puntuacion instanceof HTMLDivElement) {
    puntuacion.innerHTML = partida.puntuacionUsuario.toString();
  }
};

export const mostrarUrlCarta = (urlCarta: string) => {
  if (cartaVisible instanceof HTMLImageElement) {
    cartaVisible.src = urlCarta;
  } else {
    if (cartaVisible !== null && cartaVisible !== undefined) {
      cartaVisible.innerHTML =
        "Ups! Parece que algo ha fallado. Vuelve a empezar";
    }
  }
};

export const dameCartaF = () => {
  const numeroAleatorio = dameNumeroAleatorio();
  const cartaObtenida = dameCarta(numeroAleatorio);
  const url = obtenerUrlCarta(cartaObtenida);
  mostrarUrlCarta(url);
  const valorPuntos = obtenerValorCarta(cartaObtenida);
  const puntosSumados = sumarPuntos(valorPuntos);
  actualizarPuntuacionUsuario(puntosSumados);
  muestraPuntuacion();
  if (partida.puntuacionUsuario > 7.5) {
    return finalizarPartida();
  }
};

export const btnDameCarta = document.getElementById("btnDameCarta");

export const btnMePlanto = document.getElementById("btnMePlanto");

export const btnNuevaPartida = document.getElementById("btnNuevaPartida");

export const resetearPartida = (): void => {
  actualizarPuntuacionUsuario(0);
  muestraPuntuacion();
  mostrarUrlCarta(
    "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg?raw=true"
  );

  if (mensaje) {
    mensaje.innerHTML = "";
  }
  if (btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = false;
  }
  if (btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = false;
  }

  if (btnNuevaPartida) {
    btnNuevaPartida.classList.add("oculto");
  }
};

export const deshabilitarMeplanto = (mePlantoDeshabilitado: boolean): void => {
  if (btnMePlanto instanceof HTMLButtonElement) {
    btnMePlanto.disabled = mePlantoDeshabilitado;
  }
};

export const deshabilitarDameCarta = (
  dameCartaDeshabilitado: boolean
): void => {
  if (btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.disabled = dameCartaDeshabilitado;
  }
};

export const finalizarPartida = (): void => {
  if (mensaje) {
    mensaje.innerHTML = obtenerMensaje();
  }
  if (btnNuevaPartida) {
    btnNuevaPartida.classList.remove("oculto");
  }
  deshabilitarMeplanto(true);
  deshabilitarDameCarta(true);
};

export const mostrarMensaje = (mensajeCuandoMePlanto: string) => {
  if (mensaje instanceof HTMLDivElement) {
    mensaje.innerHTML = mensajeCuandoMePlanto;
  }
};
