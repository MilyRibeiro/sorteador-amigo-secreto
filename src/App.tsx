import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// import Formulario from './componentes/Formulario/Formulario';
import Configuracao from './paginas/Configuracao';
import Sorteio from './paginas/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* <Route path='/' element={Formulario} /> */}
          <Route path='/' element={<Configuracao />} />
          <Route path='/sorteio' element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

