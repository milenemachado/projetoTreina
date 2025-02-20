

async function enviar() {
  const formacoes = [];
  const experiencias = [];
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const logradouro = document.getElementById("rua").value;
  const numero = document.getElementById("numero").value;
  const cep = document.getElementById("cep").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;
  const foto = document.getElementById("img-input").files[0];
  const telefone = document.getElementById("telefone").value;
  const ddd = document.getElementById("ddd").value;
  const whatsapp = document.querySelector('input[name="whatsapp"]:checked').value;
  const linkedin = document.getElementById("LinkedIn").value ? document.getElementById('LinkedIn').value:null;
  const instagram = document.getElementById("Instagram").value ? document.getElementById('Instagram').value : null;
  const github = document.getElementById("Github").value ? document.getElementById('Github').value : null;
  let usuario = "";
  let endereco= "";
  let status = "";
  let ddd_tb = "";
  let telefone_tb = "";
  let rede = "";
  let formacaoUsuario = "";
  let experienciaUsuario = "";
  let baseString64 = "";
  
  document.querySelectorAll(".formacao-container").forEach((div) => {
    const curso = div.querySelector("input[name='nome']").value;
    const grau = div.querySelector("select[name='grau']").value;
    const inicio = div.querySelector("input[name='dataInicio']").value;
    const fim = div.querySelector("input[name='dataFim']").value;

    formacoes.push({ curso, grau, inicio, fim });
  });

  document.querySelectorAll(".experiencia-container").forEach((div) => {
    const atividade = div.querySelector("input[name='nome']").value;
    const tipo = div.querySelector("select[name='categoria']").value;
    const inicio = div.querySelector("input[name='dataInicio']").value;
    const fim = div.querySelector("input[name='dataFim']").value;

    experiencias.push({ atividade, tipo, inicio, fim });
  });
  
  // Lê a imagem em base64 (se houver)
  if (foto) {
    baseString64 = await lerImagemBase64(foto);
  }

  try {
    // 1️⃣ Cadastrar Usuário
    await fetch("http://localhost:8080/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "nome":nome,
        "email":email,
        "foto": baseString64
      }),
    })
    .then(response => {status = response.status; return response.json()})
    .then(data => {
      usuario = data;
    })
    

    if (status == 409) {
      await fetch("http://localhost:8080/usuario", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(response => response.json())
      .then(data => {
        usuario = data[0];
      })
      
    }
    // 2️⃣ Cadastrar Endereço
    await fetch("http://localhost:8080/endereco", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "logradouro":logradouro,
        "numero":numero,
        "bairro":bairro,
        "cidade":cidade,
        "uf":uf,
        "cep":cep
      }),
    })
    .then(response => {
      if (response.status == 400) {
        status = response.status;
        alert("Unidade Federativa (UF) Inválida!");
    } else {
      status = response.status
      return response.json();
    }
  })
    .then(data => {
      endereco = data;
    })
    

    if (status == 409) {
      await fetch("http://localhost:8080/endereco", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(response => response.json())
      .then(data => {
        endereco = data[0];
      })
      .catch(error => {
        console.log("Erro: ",error);
      })
    }
    // 3️⃣ Associar Usuário ao Endereço
    await fetch("http://localhost:8080/usuarioendereco", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "usuario":usuario,
        "endereco":endereco
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    
    // 4️⃣ Cadastrar Telefone

    await fetch("http://localhost:8080/ddd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "ddd":ddd
      })
    })
    .then(response => {status=response.status; return response.json()})
    .then(data => {
      console.log(data);
      ddd_tb = data;
    })

    if(status === 409){
      await fetch("http://localhost:8080/ddd", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(response => response.json())
      .then(data => {
        ddd_tb = data[0];
      })
    }

    await fetch("http://localhost:8080/telefone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "telefone":telefone,
        "ddd":ddd_tb
      })
  })
  .then(response =>{status = response.status ;return response.json()})
  .then(data => {
    console.log(data);
    telefone_tb = data;
  })

  if (status == 500){
    alert("Numero Incorreto! Deve conter 9 digitos!");
  } else if (status == 409){
    alert("Telefone ja cadastrado!");
  }

  await fetch("http://localhost:8080/usuariotelefone", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "usuario":usuario,
      "telefone":telefone_tb
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

  if(whatsapp == "sim"){
    await fetch("http://localhost:8080/redesocial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "whatsapp":`http://wa.me/55${ddd}${telefone}`,
        "linkedin":linkedin,
        "instagram":instagram,
        "github":github
      }),
    })
    .then(response => response.json())
    .then(data => {
      rede = data;
    })
    
  } else{
    await fetch("http://localhost:8080/redesocial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "linkedin":linkedin,
        "instagram":instagram,
        "github":github
      }),
    })
    .then(response => response.json())
    .then(data => {
      rede = data;
    })
  }

  await fetch("http://localhost:8080/usuariorede",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "usuario":usuario,
      "redeSocial":rede
      })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

  await fetch("http://localhost:8080/formacao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formacoes),
  })
  .then(response => {status = response.status; return response.json()})
  .then(data => {
    formacaoUsuario = data;
  })

  for (let i = 0; i < formacaoUsuario.length; i++) {
    await fetch("http://localhost:8080/usuarioformacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "usuario": usuario,
        "formacao": formacaoUsuario[i]
      })
      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      })
  }

  await fetch("http://localhost:8080/experiencia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(experiencias),
  })
  .then(response => response.json())
  .then(data => {
    experienciaUsuario = data;
  })
  for (let i = 0; i < experienciaUsuario.length; i++) {
  await fetch("http://localhost:8080/usuarioexperiencia", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "usuario":usuario,
      "experiencia":experienciaUsuario[i]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}

document.getElementById("nome").value = "";
document.getElementById("email").value = "";
document.getElementById("rua").value = "";
document.getElementById("numero").value = "";
document.getElementById("cep").value = "";
document.getElementById("bairro").value = "";
document.getElementById("cidade").value = "";
document.getElementById("uf").value = "";
document.getElementById("img-input").value = "";
document.getElementById("telefone").value = "";
document.getElementById("ddd").value = "";
document.getElementById("LinkedIn").value = "";
document.getElementById("Instagram").value = "";
document.getElementById("Github").value = "";

// Zerar campos dentro das divs de formação e experiência
document.querySelectorAll(".formacao-container").forEach(div => {
    div.querySelector("input[name='nome']").value = "";
    div.querySelector("select[name='grau']").value = "";
    div.querySelector("input[name='dataInicio']").value = "";
    div.querySelector("input[name='dataFim']").value = "";
});

document.querySelectorAll(".experiencia-container").forEach(div => {
    div.querySelector("input[name='nome']").value = "";
    div.querySelector("select[name='categoria']").value = "";
    div.querySelector("input[name='dataInicio']").value = "";
    div.querySelector("input[name='dataFim']").value = "";
});

  
  } catch (error) {
    console.error("Erro geral:", error.message);
  }
}


// Converte imagem para Base64 usando Promise
function lerImagemBase64(foto) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject("Erro ao ler imagem.");
  });
}
export default enviar;
