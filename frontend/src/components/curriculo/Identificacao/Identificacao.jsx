import  { useState, useEffect } from 'react';

function Identificacao() {
  const [identificacao, setIdentificacao] = useState({
    nome: '',
    endereco: '',
    telefone: '',
  });
  const [loading, setLoading] = useState(true);
  const userId = 1; 

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/usuario/${userId}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setIdentificacao(data);
      } catch (error) {
        console.error('Erro ao buscar identificação:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [userId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h3 className="titulo-secao identificacao">Identificação</h3>
      <div className="container margem">
        <div className="row row-cols-12 espaco">
          <div className="col">
            <p>
              <b>Nome: </b>{identificacao.nome}
            </p>
          </div>
        </div>
        <div className="row row-cols-12 espaco">
          <div className="col">
            <p>
              <b>Endereço: </b>{identificacao.endereco}
            </p>
          </div>
        </div>
        <div className="row row-cols-auto">
          <div className="col espaco-entre">
            <p>
              <b>Telefone: </b>{identificacao.telefone}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Identificacao;
