import { useState } from 'react';

function Experiencias() {
  const [experiencias, setExperiencias] = useState([]);

  const adicionarExperiencia = () => {
    setExperiencias([
      ...experiencias,
      {
        empresa: '',
        cargo: '',
        inicio: '',
        fim: '',
        tipo: 'formal', // Valor padrão: trabalho formal
      },
    ]);
  };

  const removerExperiencia = (index) => {
    const novasExperiencias = [...experiencias];
    novasExperiencias.splice(index, 1);
    setExperiencias(novasExperiencias);
  };

  const atualizarExperiencia = (index, campo, valor) => {
    const novasExperiencias = [...experiencias];
    novasExperiencias[index][campo] = valor;
    setExperiencias(novasExperiencias);
  };

  return (
    <div className="container">
      <h2>Experiência Profissional</h2>
      {experiencias.map((experiencia, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor={`empresa-${index}`} className="form-label">
                  Empresa
                </label> <br/>
                <input
                  type="text" placeholder="Empresa"
                  className="form-control"
                  id={`empresa-${index}`}
                  value={experiencia.empresa}
                  onChange={(e) =>
                    atualizarExperiencia(index, 'empresa', e.target.value)
                  }
                />
              </div>
              <div className="col-md-4">
                <label htmlFor={`cargo-${index}`} className="form-label">
                  Cargo
                </label> <br/>
                <input
                  type="text" placeholder="Cargo"
                  className="form-control"
                  id={`cargo-${index}`}
                  value={experiencia.cargo}
                  onChange={(e) => atualizarExperiencia(index, 'cargo', e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor={`tipo-${index}`} className="form-label">
                  Tipo
                </label> <br/>
                <select
                  className="form-select"
                  id={`tipo-${index}`}
                  value={experiencia.tipo}
                  onChange={(e) => atualizarExperiencia(index, 'tipo', e.target.value)}
                >
                  <option value="formal">Trabalho Formal</option>
                  <option value="projeto">Projeto</option>
                  <option value="voluntariado">Voluntariado</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <label htmlFor={`inicio-${index}`} className="form-label">
                  Início
                </label> <br/>
                <input
                  type="text" placeholder="Inicio"
                  className="form-control"
                  id={`inicio-${index}`}
                  value={experiencia.inicio}
                  onChange={(e) => atualizarExperiencia(index, 'inicio', e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor={`fim-${index}`} className="form-label">
                  Fim
                </label> <br/>
                <input
                  type="text" placeholder="Fim"
                  className="form-control"
                  id={`fim-${index}`}
                  value={experiencia.fim}
                  onChange={(e) => atualizarExperiencia(index, 'fim', e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={() => removerExperiencia(index)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={adicionarExperiencia}>
        Adicionar Experiência
      </button>
    </div>
  );
}

export default Experiencias;
