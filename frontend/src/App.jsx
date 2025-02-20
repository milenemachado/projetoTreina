import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';  


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'

import Identificacao from './components/curriculo/Identificacao/Identificacao';
import Formacao from './components/curriculo/Formacao/Formacao';
import Experiencia from './components/curriculo/Experiencia/Experiencia';
import Redes from './components/curriculo/RedesSociais/Redes';
import NavBar from './components/MyNavBar/MyNavBar';
import Avatar from './components/Image/Avatar';
import Cadastrar from './components/Formulario/Cadastro';
import { generatePDF } from './GeneratePDF';
import Curriculo from './assets/js/Curriculo'

document.addEventListener(
  "DOMContentLoaded",
  Curriculo()
)


function Hearder() {
  return (
    <>
      <NavBar />
      <Avatar />
      <Router>
        <Routes>
          <Route path="/visualizar" element={<Visualizar />} />
          <Route path="/" element={<Cadastrar/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}


function Visualizar() {
  return(
    <>
    <div className="limite">
    <div className="curriculo" id="curriculo">
      <Identificacao />
      <Formacao />
      <Experiencia />
      <Redes />
      <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-primary " onClick={() => generatePDF("root")}>
        Baixar PDF
      </button>
      </div>
      </div>
     </div> 
    </>
  )
}


function Footer(){
  return(
    <>
      <footer className="footer">
        <p className="copyright">Desenvolvido por Milene Machado - Todos direitos reservados - &copy;Copyright 2025 </p>
      </footer>
    </>
  )
}


function App() {

  return (
    <>
    <Hearder />
    
    </>
  )
}

export default App
