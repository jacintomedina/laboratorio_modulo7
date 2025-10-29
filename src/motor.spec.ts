///////////////  APARTADOS OBLIGATORIOS  /////////////////

import { vi } from "vitest";

import { partida } from "./modelo";
import {
  dameCarta,
  sumarPuntos,
  actualizarPuntuacionUsuario,
  obtenerMensaje,
  obtenerValorCarta,
} from "./motor";

describe("sumarPuntos", () => {
  it("Debería sumar los puntos de la carta a la puntuación del usuario", () => {
    //Arrange
    const puntosCarta: number = 5;
    const puntuacionEsperada: number = 7;
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(2);

    //Act
    const resultado: number = sumarPuntos(puntosCarta);

    //Arrange
    expect(resultado).toBe(puntuacionEsperada);
  });
});

describe("obtenerMensaje", () => {
  it("Debería devolver el mensaje '¡Lo has clavado!¡Enhorabuena!' si la puntuación del usuario es 7.5", () => {
    //Act
    const puntuacion: number = 7.5;
    const mensajeEsperado: string = "¡Lo has clavado!¡Enhorabuena!";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(puntuacion);

    //Arrange
    const resultado = obtenerMensaje();

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Debería devolver el mensaje 'Game Over' si la puntuación del usuario es mayor que 7.5", () => {
    //Act
    const puntuacion: number = 9;
    const mensajeEsperado: string = "Game Over";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(puntuacion);

    //Arrange
    const resultado = obtenerMensaje();

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Debería devolver el mensaje 'Has sido muy conservador' si la puntuación del usuario es menor que 5", () => {
    //Act
    const puntuacion: number = 4;
    const mensajeEsperado: string = "Has sido muy conservador";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(puntuacion);

    //Arrange
    const resultado = obtenerMensaje();

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Debería devolver el mensaje 'Te ha entrado el canguelo, eh?' si la puntuación del usuario es igual que 5", () => {
    //Act
    const puntuacion: number = 5;
    const mensajeEsperado: string = "Te ha entrado el canguelo, eh?";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(puntuacion);

    //Arrange
    const resultado = obtenerMensaje();

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });

  it("Debería devolver el mensaje 'Casi casi...' si la puntuación del usuario es mayor que 5", () => {
    //Act
    const puntuacion: number = 6;
    const mensajeEsperado: string = "Casi casi...";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(puntuacion);

    //Arrange
    const resultado = obtenerMensaje();

    //Assert
    expect(resultado).toBe(mensajeEsperado);
  });
});

///////////////  APARTADOS OPCIONALES  /////////////////

describe("dameCarta", () => {
  it("Debería sumar 2 cuando el número aleatorio sea mayor que 7", () => {
    //Act
    const numeroAleatorio: number = 8;
    const numeroEsperado: number = 10;

    //Arrange
    const resultado = dameCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerValorCarta", () => {
  it("Todas las cartas tienen un valor igual a su número excepto 10, 11 y 12, que valen 0.5", () => {
    //Act
    const carta: number = 11;
    const valorEsperado = 0.5;

    //Arrange
    const resultado = obtenerValorCarta(carta);

    //Assert
    expect(resultado).toBe(valorEsperado);
  });
});
