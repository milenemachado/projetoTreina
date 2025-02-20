import { useState, useEffect } from 'react';

function Formacao() {
  const [formacao, setFormacao] = useState({
    graduacao: [],
    tecnico: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormacao = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/formacao');
        if (!response.ok) {
          throw new Error('Erro ao buscar as informações de formação');
        }
        const data = await response.json();
        setFormacao(data);
      } catch (error) {
        console.error('Erro ao buscar formação:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormacao();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h3 className="titulo-secao formacao">Formação</h3>
      <div className="container">
        <h5 className="graduacao">Graduação</h5>
        <ul>
          {formacao.graduacao.map((item, index) => (
            <li key={index} className="item deslocamento">
              {item}
            </li>
          ))}
        </ul>

        <ul>
          <h5 className="tecnico">Técnico</h5>
          {formacao.tecnico.map((item, index) => (
            <li key={index} className="item deslocamento">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Formacao;
