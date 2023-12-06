import React from 'react';
import Camera from './componentes/Camera';

function App() {
  return (
    <div>
      <Camera />
      <div className="col-button-voltar-entrar">
        <button
          className="button-voltar-entrar"
          type="button"
          onClick={() => history("/saida")}
        >
          {" "}
          <IoArrowBackCircle /> Voltar
        </button>
      </div>
    </div>
  );
}

export default App;