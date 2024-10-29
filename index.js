const prompt = require("prompt-sync")(); 
const { criarProjeto } = require("./projetos/criar");
const { listarProjeto } = require("./projetos/listar");
const { editarProjeto } = require("./projetos/editar");
const { excluirProjeto } = require("./projetos/excluir");

criarProjeto("001", "demandBus", "softaware para exibir rota de usuários de ônibus em tempo real", "22/10/24", "22/10/25", "João Pedro", "4", "aguardando cliente");
criarProjeto("002", "noteSchool", "softaware para calcular as notas de aluno", "20/10/24", "22/10/26", "Valtemir", "8", "aguardando cliente");
// listarProjeto();
editarProjeto("001","demandBus", "softaware para exibir rota de usuários de ônibus em tempo real", "22/10/24", "22/10/25", "João Pedro", "4", "concluido" );
listarProjeto();
excluirProjeto("002");
// listarProjeto();