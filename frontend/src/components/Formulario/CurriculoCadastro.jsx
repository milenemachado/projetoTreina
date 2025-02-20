import  { useState } from 'react';

const Cadastro = () => {
  const [curriculoCadastrado, setCurriculoCadastrado] = useState(false);

  const handleCadastro = () => {

    setTimeout(() => {
      setCurriculoCadastrado(true);
    }, 1000); 
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={handleCadastro}>
        Cadastrar Currículo
      </button>

      {curriculoCadastrado && (
        <div className="alert alert-success mt-3" role="alert">
          Currículo cadastrado com sucesso!
        </div>
      )}
    </div>
  );
};

export default Cadastro;
