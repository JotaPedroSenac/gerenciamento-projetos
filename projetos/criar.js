const { projetos } = require("./projetos");
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

        projetos.push(novoProjeto);
        console.log(`Projeto ${novoProjeto.nome} criado com sucesso!`);
    } catch (error) {
        console.error("Erro ao criar projeto", error.message);
    }
     
}

module.exports = { criarProjeto };