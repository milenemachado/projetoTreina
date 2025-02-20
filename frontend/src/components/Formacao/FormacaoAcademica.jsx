import { useState } from 'react';


function FormacaoAcademica() {
  const [formacoes, setFormacoes] = useState([]);

  const adicionarFormacao = () => {
    setFormacoes([
      ...formacoes,
      {
        instituicao: '',
        curso: '',
        nivel: '',
        periodo: '',
      },
    ]);
  };

  const removerFormacao = (index) => {
    const novasFormacoes = [...formacoes];
    novasFormacoes.splice(index, 1);
    setFormacoes(novasFormacoes);
  };

  const atualizarFormacao = (index, campo, valor) => {
    const novasFormacoes = [...formacoes];
    novasFormacoes[index][campo] = valor;
    setFormacoes(novasFormacoes);
  };

  return (
    <div className="container">
      <h2>Formação Acadêmica</h2>
      {formacoes.map((formacao, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <label htmlFor={`instituicao-${index}`} className="form-label">
                  Instituição
                </label> <br/>
                <input
                  type="text"
                  className="form-control" placeholder="Instituição"
                  id={`instituicao-${index}`}
                  value={formacao.instituicao}
                  onChange={(e) =>
                    atualizarFormacao(index, 'instituicao', e.target.value)
                  }
                />
              </div>
              <div className="col-md-4">
                <label htmlFor={`curso-${index}`} className="form-label" >
                  Curso
                </label> <br/>
                <input
                  type="text" placeholder="Curso"
                  className="form-control"
                  id={`curso-${index}`}
                  value={formacao.curso}
                  onChange={(e) => atualizarFormacao(index, 'curso', e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor={`nivel-${index}`} className="form-label">
                  Nível
                </label><br/>
                <select
                  className="form-select"
                  id={`nivel-${index}`} placeholder="Nível"
                  value={formacao.nivel}
                  onChange={(e) => atualizarFormacao(index, 'nivel', e.target.value)}
                >
                  <option value="">Selecione</option>
                  <option value="graduacao">Graduação</option>
                  <option value="posgraduacao">Pós-graduação</option>
                  <option value="curso">Curso</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <label htmlFor={`periodo-${index}`} className="form-label">
                  Período
                </label> <br/>
                <input
                  type="text"
                  className="form-control" placeholder="Período"
                  id={`periodo-${index}`}
                  value={formacao.periodo}
                  onChange={(e) => atualizarFormacao(index, 'periodo', e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger mt-2"
              onClick={() => removerFormacao(index)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={adicionarFormacao}>
        Adicionar Formação
      </button>
    </div>
  );
}

export default FormacaoAcademica;
