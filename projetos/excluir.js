const { projetos } = require("./projetos");

// excluir Projeto

function excluirProjeto(id) {
    try {
        const indice = projetos.findIndex(projeto => 
            projeto.id === id
        );

        if (indice === -1) {
            console.log("Projeto não encontrado")
        }else{
            projetos.splice(indice, 1);
            console.log("O projeto foi removido com sucesso!");
        }
    } catch (error) {
        console.error("Não foi possível excluir o projeto", error.message);
    }
}

module.exports = { excluirProjeto };