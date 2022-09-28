import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle'
import SwhitcherTema from "./Components/SwhitcherTema";
import { BtnTema } from "./Components/Ui";
import {temaClaro, temaEscuro} from './Components/Ui/temas'


function App() {
const [tema, setTema] = useState(true)

const toggleTema = () => {
  setTema((tema) => !tema);
}

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}> 
    <GlobalStyle />
    <BtnTema onClick={toggleTema}>
      <SwhitcherTema tema={tema} /> 
    </BtnTema>
      <Cabecalho />
      <Container />
      </ThemeProvider>
   
  );
}

export default App;
