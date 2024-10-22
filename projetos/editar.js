const { projetos } = require("./projetos");
// editar projeto

function editarProjeto(id, novoNome, novaDescricao, novaDataInicio, novaDataFim, novoGerenteProjeto, novosMembrosEquipe, novoStatus) {
    try {

        const projeto = projetos.find(projeto => 
            projeto.id === id
        );

        if (projeto) {
            projeto.nome = novoNome,
            projeto.descricao = novaDescricao,
            projeto.dataInicio = novaDataInicio,
            projeto.dataFim = novaDataFim,
            projeto.gerenteProjeto = novoGerenteProjeto,
            projeto.membrosEquipe = novosMembrosEquipe,
            projeto.status = novoStatus
            
            console.log("Projeto alterado com sucesso!");
        }else{
            console.log("Projeto não existente");
        }

    } catch (error) {
        console.error("Não foi possível editar o projeto", error.mssage)
    }
}

module.exports = { editarProjeto };