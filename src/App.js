import React, { useState } from "react";
import Header from "./components/Header/Header";
import Tablero from "./components/Tablero/Tablero";
import "./App.css";
import construirBaraja from "./utils/construirBaraja";

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
  };
};

const App = () => {
  const [state, setState] = useState(getEstadoInicial());

  const seleccionarCarta = (carta) => {
    if (
      state.estaComparando ||
      state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinida
    ) {
      console.log("Se retorna perro");
      return;
    }

    const parejaSeleccionada = [...state.parejaSeleccionada, carta];
    console.log("Pareja Seleccionada: ", parejaSeleccionada);
    setState({
      ...state,
      parejaSeleccionada,
    });

    if (parejaSeleccionada.length === 2) {
      compararPareja(parejaSeleccionada);
    }
  };

  const compararPareja = (parejaSeleccionada) => {
    setState({ ...state, estaComparando: true });

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return { ...carta, fueAdivinada: true };
        });
      }

      verificarSiHayGanador(baraja);
      setState({
        // ...state,
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: state.numeroDeIntentos + 1,
      });
    }, 1000);
  };

  const verificarSiHayGanador = (baraja) => {
    if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
      alert(`Ganaste en ${state.numeroDeIntentos} intentos!`);
    }
  };

  const resetearPartida = () => {
    setState(getEstadoInicial());
  };

  return (
    <div className="App">
      <Header
        numeroDeIntentos={state.numeroDeIntentos}
        resetearPartida={() => resetearPartida()}
      />
      <Tablero
        baraja={state.baraja}
        parejaSeleccionada={state.parejaSeleccionada}
        seleccionarCarta={(carta) => seleccionarCarta(carta)}
      />
    </div>
  );
};

export default App;
