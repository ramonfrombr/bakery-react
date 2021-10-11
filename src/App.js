import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { EstiloGlobal } from './globalStyles';

import Intro from './componentes/Intro';

import Produtos from './componentes/Produtos';
import {
  produtos1 as produtos1,
  produtos2 as produtos2
} from './componentes/Produtos/dados';



import Destaque from './componentes/Destaque';

import Rodape from './componentes/Rodape';

function App() {
  return (

    <Router>

      <EstiloGlobal />

      <Intro />
      
      <Produtos
        cabecalho="Escolha seu produto"
        produtos={produtos1}
      />

      <Destaque />

      <Produtos
        cabecalho="Escolha seu produto"
        produtos={produtos2}
      />

      <Rodape />

    </Router>

  );
}

export default App;
