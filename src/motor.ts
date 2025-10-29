import { partida } from "./modelo";

export const dameNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

export const dameCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio = numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

export const obtenerValorCarta = (carta: number): number => {
  if (carta >= 10 && carta <= 12) {
    return 0.5;
  }
  return carta;
};

export const obtenerUrlCarta = (cartaAleatoria: number): string => {
  let rutaImagen = "";
  switch (cartaAleatoria) {
    case 1:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      rutaImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      return "Ups! Parece que algo ha fallado. Vuelve a empezar";
      break;
  }
  return rutaImagen;
};

export const sumarPuntos = (puntosCarta: number) => {
  return partida.puntuacionUsuario + puntosCarta;
};

export const actualizarPuntuacionUsuario = (nuevosPuntos: number) => {
  partida.puntuacionUsuario = nuevosPuntos;
};

export const obtenerMensaje = (): string => {
  if (partida.puntuacionUsuario === 7.5) {
    return "¡Lo has clavado!¡Enhorabuena!";
  } else if (partida.puntuacionUsuario > 7.5) {
    return "Game Over";
  } else if (partida.puntuacionUsuario < 5) {
    return "Has sido muy conservador";
  } else if (partida.puntuacionUsuario === 5) {
    return "Te ha entrado el canguelo, eh?";
  } else if (partida.puntuacionUsuario > 5) {
    return "Casi casi...";
  } else {
    return "Upss... No tendrías que pasar por aquí";
  }
};
