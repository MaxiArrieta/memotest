import React from "react";
import "./Carta.css";
// import ReactCardFlip from "react-card-flip";
import Flipcard from "@kennethormandy/react-flipcard";
import "@kennethormandy/react-flipcard/dist/Flipcard.css";

const Carta = ({
  seleccionarCarta,
  estaSiendoComparada,
  fueAdivinada,
  icono,
}) => {
  return (
    <div className="carta" onClick={seleccionarCarta}>
      <Flipcard
        type="horizontal"
        flipped={estaSiendoComparada || fueAdivinada}
        // disabled={true}
      >
        <div className="portada"></div>
        <div className="contenido">
          <i className={`fa ${icono} fa-5x`}></i>
        </div>
      </Flipcard>
    </div>
  );
};

export default Carta;
