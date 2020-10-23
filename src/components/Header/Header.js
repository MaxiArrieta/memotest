import React from "react";
import "./Header.css";

const Header = ({ resetearPartida, numeroDeIntentos }) => {
  return (
    <header>
      <div className="titulo">React-Memoria</div>
      <div>
        <button className="boton-reiniciar" onClick={resetearPartida}>
          Reiniciar
        </button>
      </div>
      <div className="titulo">Intentos: {numeroDeIntentos}</div>
    </header>
  );
};
export default Header;
