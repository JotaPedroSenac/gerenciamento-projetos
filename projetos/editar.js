const { projetos } = require("./projetos");
var validator = require('validator');
// editar projeto

function editarProjeto(id, novoNome, novaDescricao, novaDataInicio, novaDataFim, novoGerenteProjeto, novosMembrosEquipe, novoStatus) {
    try {

        const projeto = projetos.find(projeto => 
            projeto.id === id
        );

        if(
            validator.isEmpty(id) ||
            validator.isEmpty(novoNome) ||
            validator.isEmpty(novaDescricao) ||
            validator.isEmpty(novaDataInicio) ||
            validator.isEmpty(novaDataFim) ||
            validator.isEmpty(novoGerenteProjeto) ||
            validator.isEmpty(novosMembrosEquipe) ||
            validator.isEmpty(novoStatus)
        ){
            console.error("Todos os dados precisam estar preenchidos");
            return;
        }

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
        console.error("Não foi possível editar o projeto", error.message);
    }
}

module.exports = { editarProjeto };