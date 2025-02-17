import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js';  

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import FormacaoAcademica from './FormacaoAcademica';
import Experiencias from './Experiencias'; 
import RedesSociais from './RedesSociais';
import MyThemeSwitcher from './MyThemeSwitcher/MyThemeSwitcher';


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

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> 
    <div className="container-fluid cor"> 
      <div className="collapse navbar-collapse" id="navbarNav">
      <span className="titulo navbar-brand mb-0 h1">Curriculo Treina</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id ="cadastar" className="nav-link" aria-current="page" href="/">Cadastrar</a>
          </li>
        
          <li className="nav-item">
            <a id="visualizar" className="nav-link" href="/visualizar">Visualizar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Imprimir</a>
          </li>
        </ul>
        <MyThemeSwitcher/>
      </div>
    </div>
    </nav>
  );
}


function Avatar(){
    return(
    <a className="img" href="/visualizar">
      <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ3QHqE1UyVRSd5PSgStxOUlq3gd4MLZCJUxMXQZmXUNNR4v9l0BsgvXlBaVES8nbdCg&usqp=CAU" alt="" ></img>
    </a>
    )
}

function Cadastrar() {
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
   const file = event.target.files[0];
   if (file) {
    const reader = new FileReader();
     reader.onload = (e) => {
        setPreview(e.target.result); 
     };
      reader.readAsDataURL(file); 
    }
  };

 {/* const handlePreview = () => {
    const previewWindow = window.open('', '_blank');
   previewWindow.document.write(generateCurriculumHTML()); // Função para gerar o HTML
    previewWindow.document.close();
 }; */}

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const formData = new FormData(event.target);
    fetch('/api/curriculo', { 
      method: 'POST',
      body: formData,
    })
  .then(response => response.json())
  .then(data => {
      console.log('Currículo cadastrado com sucesso:', data);
    })
  .catch(error => {
      console.error('Erro ao cadastrar currículo:', error);
    });
  };

  return(
    <>
      <div className="cad container mt-5">
        <h2 className="mb-4">Cadastro</h2>
        <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
            <label className="form-label">Foto de Perfil:</label> <br/>
            <input type="file" id="img-input" onChange={handleImageChange} className="form-control" />
          </div> <br/>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="nome" placeholder="Nome" />
            <label htmlFor="nome"> Nome completo</label>
          </div><br/>



          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="rua" placeholder="Rua" />
            <label htmlFor="rua"> Logradouro</label>
          </div>

        
            <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="numero" placeholder="Número" />
              <label htmlFor="numero">Número</label>
            </div>
            <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="cep" placeholder="CEP" />
              <label htmlFor="cep"> CEP</label>
            </div>
    

          
            <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="bairro" placeholder="Bairro" />
              <label htmlFor="bairro"> Bairro</label>
            </div>
            <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="cidade" placeholder="Cidade" />
              <label htmlFor="cidade"> Cidade</label>
            </div>
            <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="uf" placeholder="UF" />
              <label htmlFor="uf"> UF</label>
            </div>
           <br/>

          <div className="col md-3 form-floating md-3">
              <input type="text" className="form-control" id="ddd" placeholder="DDD" />
              <label htmlFor="ddd"> DDD</label>
            </div>

          
            <div className="col mb-3 form-floating">
              <input type="text" className="form-control" id="telefone" placeholder="Telefone" />
              <label htmlFor="telefone"> Telefone</label>
            </div>
         
            <div className="row mb-3">
            <div className="col d-flex align-items-center">
              <p className="mb-0 me-2"> Número informado é WhatsApp?</p>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="whatsapp" id="whatsappSim" value="sim" />
                <label className="form-check-label" htmlFor="whatsappSim">Sim</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="whatsapp" id="whatsappNao" value="nao" />
                <label className="form-check-label" htmlFor="whatsappNao">Não</label>
              </div>
              </div>
              </div> <br/>
            <div className="col-md-5 form-floating">
              <input type="email" className="form-control" id="email" placeholder="Email" />
              <label htmlFor="email"> Email</label> 
            </div><br/>

            <FormacaoAcademica /> <br/> 
            <Experiencias /> <br/>
            <RedesSociais />



          <div className="d-flex justify-content-center gap-2"> {/* Alinhamento dos botões */}
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
            {/* <button type="button" className="btn btn-secondary" onClick={handlePreview}>
              Pré-visualizar Currículo
            </button> */}
          </div>
        </form>
      </div>
    </>
  )
}



function Visualizar() {
  return(
    <>
      <Indentificao />
      <Formacao />
      <Experiencia />
      <Redes />
    </>
  )
}

function Indentificao() {
  return(
    <>
    <h3 className="titulo-secao identificacao">Identificação</h3>
      <div className="container margem">
     <div className="row row-cols-12 espaco">
            <div className="col">
              <p1><b>Nome: </b>Caio Gabriel Marinho Oliveira do Nascimento</p1><br/>
            </div>
          </div>
      <div className="row row-cols-12 espaco">
            <div className="col">
              <p1><b>Endreço: </b>Rua Rodrigues ferreira Nº 45, Várzea,50810020, Recife,Pernambuco</p1>
            </div>
          </div>
        <div className="row row-cols-auto ">
          
          <div className="col espaco-entre">
            <p1><b>Telefone: </b><a href="http://wa.me/5581979056770" target="_blank">
            (81) 9 7905-6770 
            </a></p1>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
</svg>
          </div>
        </div>
      </div>
    <hr/>
    </>
  )
}
function Formacao() {
  return(
    <>
    <h3 className="titulo-secao formacao">Formação</h3>
    <div className="container">
      <h5 className="graduacao">Graduação</h5>
      <ul>
        <li className="item deslocamento">
              2021- Atual - Bacharelado em Gestão da Informação - Universidade Federal de Pernambuco
          </li>
          <li className="item deslocamento">
              2022- 2024 - Técnologo em Análise e Desenvolvimento de Sistemas - Faculdade Senac Pernambuco
          </li>
      </ul>
      <ul>
        <h5 className="tecnico">Técnico</h5>
        <li className="item deslocamento">
          2018 - 2020 - Mecânica Industrial - Escola Técnica Estadual Professor Agamenon Magalhães
        </li>
      </ul>
    </div>
    <hr/>
    </>
  )
}

function Experiencia() {
  return(
    <>
      <h3 className="titulo-secao experiencia">Experiência</h3>
      <div className="container">
        <h5 className="voluntario">Voluntário</h5>
        <ul>
        <li className="item deslocamento">
          2025-2026 - Membro Voluntário na AIESEC como diretor de Finanças & Legalidades
        </li>
        <li className="item deslocamento">
          2024-2024 - Membro Voluntário na AIESEC no time de New Sales
        </li>
        </ul>
        <h5 className="extra">Extra-Curricular</h5>
        <ul>
          <li className="item deslocamento">
            2023-2025 - Membro Ativo do Diretório Acadêmico Curso de Gestão da Informação
          </li>
        </ul>
        <h5 className="projetos">Projetos</h5>
        <ul>
          <li className="item deslocamento">
            2023-2024 - Assentamento Funcional Digital (AFD)
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  )
}

function Redes(){
  return(
    <>
    <h3 className="titulo-secao redes">Redes Sociais</h3>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
    <div className="col-md-4 espaco-entre">
            <p1><b>Email: </b><a href="mailto:kaigabriel12@gmail.com" target="_blank">Kaigabriel12@gmail.com</a></p1>
          </div>
          <div className="col-md-4 espaco-entre">
            <p1><b>Linkedin: </b><a href="https://br.linkedin.com/in/caio-marinho-b46143223" target="_blank">Caio Marinho</a></p1>
          </div>
            <div className="col-md-4 espaco-entre">
              <p1><b>Github: </b><a href="https://github.com/Caio-Marinho" target="_blank">Caio Marinho</a></p1>
          </div>
          </div>
          <hr/>
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
