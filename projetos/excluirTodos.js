const { projetos } = require("./projetos");
var validator = require('validator');

function excluirTodos() {
    try {
        // let excluirProjeto = projetos;
        // excluirProjeto = [];
        projetos.length = 0;

        console.log("Todos os projeto foram excluidos");
    } catch (error) {
        console.error("erro ao excluir projeto")
    }
  
}1
module.exports = { excluirTodos };