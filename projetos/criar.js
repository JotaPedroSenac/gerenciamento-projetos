const { projetos } = require("./projetos");
var validator = require('validator');
// criar projeto

function criarProjeto(id, nome, descricao, dataInicio, dataFim, gerenteProjeto, membrosEquipe, status) {
    try {
        const novoProjeto = {
            id: id,
            nome: nome,
            descricao: descricao,
            dataInicio: dataInicio,
            dataFim: dataFim,
            gerenteProjeto: gerenteProjeto,
            membrosEquipe: membrosEquipe, 
            status: status
        }

        if (
            validator.isEmpty(id) ||
            validator.isEmpty(nome) ||
            validator.isEmpty(descricao) ||
            validator.isEmpty(dataInicio) ||
            validator.isEmpty(dataFim) ||
            validator.isEmpty(gerenteProjeto) ||
            validator.isEmpty(membrosEquipe) ||
            validator.isEmpty(status)
        ) {
            console.error("Todos os dados precisam ser preenchidos");
            return;
        }

        projetos.push(novoProjeto);
        console.log(`Projeto ${novoProjeto.nome} criado com sucesso!`);
    } catch (error) {
        console.error("Erro ao criar projeto", error.message);
    }
     
}

module.exports = { criarProjeto };