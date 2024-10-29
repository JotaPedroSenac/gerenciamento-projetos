const prompt = require("prompt-sync")(); 
const { criarProjeto } = require("./projetos/criar");
const { listarProjeto } = require("./projetos/listar");
const { editarProjeto } = require("./projetos/editar");
const { excluirProjeto } = require("./projetos/excluir");
const { excluirTodos } = require("./projetos/excluirTodos");


// criarProjeto("001", "demandBus", "softaware para exibir rota de usuários de ônibus em tempo real", "22/10/24", "22/10/25", "João Pedro", "4", "aguardando cliente");
// criarProjeto("002", "noteSchool", "softaware para calcular as notas de aluno", "20/10/24", "22/10/26", "Valtemir", "8", "aguardando cliente");
// listarProjeto();
// editarProjeto("001","demandBus", "softaware para exibir rota de usuários de ônibus em tempo real", "22/10/24", "22/10/25", "João Pedro", "4", "concluido" );
// listarProjeto();
// excluirProjeto("002");
// listarProjeto();

function exibirMenu() {
    console.log("========================");
    console.log("1 - Criar Projeto");
    console.log("2 - Editar Projeto");
    console.log("3 - Excluir Projeto");
    console.log("4 - Listar Projetos");
    console.log("5 - Sair");
    console.log("6-excluir tudo");
}

let opcao;
let id;

do {
    exibirMenu();
    opcao = parseInt(prompt("Digite uma opção:"));
    switch (opcao) {
        case 1:
            id = prompt("Digite o id do projeto:");
            let nome = prompt("Digite o nome:");
            let descricao = prompt("Digite a descricao:");
            let dataInicio = prompt("Digite a data de inicio:");
            let dataFim = prompt("Digite a data do fim:");
            let gerenteProjeto = prompt("Digite o gerente do projeto:");
            let membrosEquipe = prompt("Digite o tamanho da equipe");
            let status = prompt("Digite o status:");


            criarProjeto(id, nome, descricao, dataInicio, dataFim, gerenteProjeto, membrosEquipe, status);
            listarProjeto();
            break;
        case 2:
            // console.log("Editando Aluno")
            id = prompt("Digite o id");
            let novoNome = prompt("Digite o novo nome:");
            let novaDescricao = prompt("Digite a nova descricao:");
            let novaDataInicio = prompt("Digite a nova data de inicio:");
            let novaDataFim = prompt("Digite a nova data do fim:");
            let novoGerenteProjeto = prompt("Digite o novo gerente do projeto:");
            let novosMembrosEquipe = prompt("Digite o novo tamanho da equipe");
            let novoStatus = prompt("Digite o novo status:");

            editarProjeto(id, novoNome, novaDescricao, novaDataInicio, novaDataFim, novoGerenteProjeto, novosMembrosEquipe, novoStatus);
            listarProjeto();
            break;
        case 3:
            id = prompt("Digite o id");
            excluirProjeto(id);
            break;
        case 4:
            listarProjeto();
            break;
        case 5:
            console.log("Saindo do sistema")
            break;
        case 6:
            excluirTodos();
            break;
        default:
            console.log("Valores inválidos");
            break;
    }
} while (opcao !== 5);
