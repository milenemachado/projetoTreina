import enviar from '../../assets/Enviar';
import FormacaoAcademica from '../Formacao/FormacaoAcademica';
import Experiencias from '../Experiencia/Experiencias'; 
import RedesSociais from '../curriculo/RedesSociais/Redes';
import CurriculoCadastro from '../Formulario/CurriculoCadastro';


function Cadastrar() {

    const handleSubmit = (e) => {
      e.preventDefault();
      enviar();
    };
  
  
    return(
      <>
        <div className="cad container mt-5">
          <h2 className="mb-4">Cadastro</h2>
          <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
              <label className="form-label">Foto de Perfil:</label> <br/>
              <input type="file" id="img-input"  className="form-control" />
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
                 
  
              <FormacaoAcademica /> <br/> 
              <Experiencias /> <br/>
              <RedesSociais />
              
              <div className="d-flex justify-content-center gap-2"> 
              <button type="submit" id="enviar" className="btn btn-primary">
                Cadastrar
              </button>

              </div>
              <CurriculoCadastro />

          </form>
        </div>
      </>
    )
  }

  export default Cadastrar
