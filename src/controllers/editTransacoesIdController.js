const { EditTransacoesIdUseCase } = require('../useCases');

class EditTransacoesIdController {
    async execute(request, response) {
      try {
        const editTransacoesIdUseCase = new EditTransacoesIdUseCase();
        const id = request.params.id;
        const { descricao, valor } = request.body;

        const transacao = await editTransacoesIdUseCase.execute(id, descricao, valor);
        return response.send(transacao);
      } catch (error) {
        console.error(error);
        return response.status(500).send('Erro interno do servidor');
      }
    }
  }
  
  module.exports = EditTransacoesIdController;
