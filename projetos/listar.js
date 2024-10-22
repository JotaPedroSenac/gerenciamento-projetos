const { projetos } = require("./projetos");

// listar projeto

function listarProjeto() {
    try {
        if (projetos.length === 0) {
            console.log("Ainda não existe projetos criados!");
        }else{
            projetos.forEach(projeto => 
                console.log(projeto)
            );
        }
        
    } catch (error) {
        console.error("Erro ao listar projetos", error.message);
    }

}

module.exports = { listarProjeto };