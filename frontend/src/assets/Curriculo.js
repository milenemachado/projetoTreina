async function Curriculo(){
    let nome = '';
    let endereco = "";
    let foto = "";
    let telefone = "";
    let email = "";
    let ddd = "";
    let whatsapp = "";
    let github = "";
    let linkedin = "";
    let tipo_formacao = [];
    let jsonComplete = "";
    const sem_numero = "s/n";
    try{
        await fetch('http://localhost:8080/pessoa',{
            method : 'GET',
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            jsonComplete = data;
            nome = data[0].nome
            endereco = `${data[0].logradouro}${data[0].numero?", Nº"+data[0].numero:sem_numero},${data[0].cep} ,${data[0].bairro}, ${data[0].cidade}-${data[0].uf}`
            foto = data[0].foto_base64;
            ddd = data[0].ddd
            telefone = data[0].telefone
            email = data[0].email
            whatsapp = data[0].whatsapp
            github = data[0].github
            linkedin = data[0].linkedin
        })
        document.getElementById('nome').innerHTML = `<b>Nome: </b>${nome}`;
        document.getElementById("Endereco").innerHTML = `<b>Endreço: </b>${endereco}`
        document.getElementById("logo").src = foto;
        if (whatsapp != '' || whatsapp != null) {
          document.getElementById("whatsapp").href = `http://wa.me/55${ddd}${telefone}`;
          document.getElementById("telefone").innerHTML = `(${ddd}) ${telefone}`;
          document.getElementById("contato").innerHTML = `<img src="./img/icons8-whatsapp-48.png" alt="Logo do WhatsApp" />`
        } else{
            document.getElementById("telefone").innerHTML = `(${ddd}) ${telefone}`;
        }
        if (email != '' || email != null) {
            document.getElementById("contato-email").innerHTML = `<img src="./img/icons8-gmail-50.png" alt="Logo do Email" />`
            document.getElementById("title_email").innerHTML = "<b>Email: </b>";
            document.getElementById("email").href = `mailto:${email}`;
        }
        if (linkedin != '' || linkedin != null) {
            document.getElementById("contato-likedin").innerHTML = `<img src="./img/icons8-linkedin-48.png" alt="Logo do Likedin" />`
            document.getElementById("title_likedin").innerHTML = "<b>Likedin: </b>";
            document.getElementById("likedin").href = `${linkedin}`;
            document.getElementById("likedin").innerHTML = `${linkedin}`;
        }
    
        if (github != '' || github != null) {
            document.getElementById("contato-github").innerHTML = `<img src="./img/icons8-github-30.png" alt="Logo do github" />`
            document.getElementById("title_github").innerHTML = "<b>Github: </b>";
            document.getElementById("github").href = `${github}`;
            document.getElementById("github").innerHTML = github;
        }
        
        for (let index = 0; index < jsonComplete.length; index++) {
            const element = jsonComplete[index].grau;
            const grauId = element.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
        
         
            if (!tipo_formacao.includes(grauId)) {
                tipo_formacao.push(grauId);
        
                let titulo = document.createElement("h5");
                titulo.className = "graduacao";
                titulo.id = `titulo-${grauId}`;
                titulo.innerText = element;
        
          
                let listaCursos = document.createElement("ul");
                listaCursos.id = `lista-curso-${grauId}`;
        
                
                let formacaoContainer = document.getElementById("formacao");
                formacaoContainer.appendChild(titulo);
                formacaoContainer.appendChild(listaCursos);
            }
      
            let listaCursos = document.getElementById(`lista-curso-${grauId}`);
            let cursoItem = document.createElement("li");
            cursoItem.className = "item deslocamento";
            let inicio = new Date(jsonComplete[index].inicio).getFullYear();
            let fim = new Date(jsonComplete[index].fim).getFullYear();
            let hoje = new Date().getFullYear();
            cursoItem.innerText = fim >= hoje ? `${inicio} - Atual - ${jsonComplete[index].curso}` : `${inicio} - ${fim} - ${jsonComplete[index].curso}`; // Verifica se o curso ainda está em andamentojsonComplete[index].curso;
            listaCursos.appendChild(cursoItem);
        }

        await fetch('http://localhost:8080/pessoa/experiencia',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            jsonComplete = data;
            
        })

        for (let index = 0; index < jsonComplete.length; index++) {
            const element = jsonComplete[index].tipo;
            const grauId = element.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
        
           
            if (!tipo_formacao.includes(grauId)) {
                tipo_formacao.push(grauId);
        
                let titulo = document.createElement("h5");
                titulo.className = "voluntario";
                titulo.id = `titulo-${grauId}`;
                titulo.innerText = element;
        
               
                let listaCursos = document.createElement("ul");
                listaCursos.id = `lista-experiencia-${grauId}`;
        
             
                let formacaoContainer = document.getElementById("experiencia");
                formacaoContainer.appendChild(titulo);
                formacaoContainer.appendChild(listaCursos);
            }
        
            let listaCursos = document.getElementById(`lista-experiencia-${grauId}`);
            let cursoItem = document.createElement("li");
            cursoItem.className = "item deslocamento";
            let inicio = new Date(jsonComplete[index].inicio).getFullYear();
            let fim = new Date(jsonComplete[index].fim).getFullYear();
            let hoje = new Date().getFullYear();
            cursoItem.innerText = fim >= hoje ? `${inicio} - Atual - ${jsonComplete[index].atividade}` : `${inicio} - ${fim} - ${jsonComplete[index].curso}`; // Verifica se o curso ainda está em andamentojsonComplete[index].curso;
            listaCursos.appendChild(cursoItem);
        }

    }catch (error) {
        console.log("Erro ao buscar dados:", error);
    }
    
        

}

export default Curriculo;
