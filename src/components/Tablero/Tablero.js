import React from "react";
import Carta from "../Carta/Carta";
import "./Tablero.css";

const Tablero = ({ baraja, parejaSeleccionada, seleccionarCarta }) => {
  return (
    <div className="tablero">
      {baraja.map((carta, index) => {
        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
        return (
          <Carta
            key={index}
            icono={carta.icono}
            estaSiendoComparada={estaSiendoComparada}
            seleccionarCarta={() => seleccionarCarta(carta)}
            fueAdivinada={carta.fueAdivinada}
          />
        );
      })}
    </div>
  );
};

export default Tablero;
