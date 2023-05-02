const { DeleteTransacoesIdUseCase } = require('../useCases');

class DeleteTransacoesIdController {
  async execute(request, response) {
    try {
      const id = request.params.id;
      const deleteTransacoesIdUseCase = new DeleteTransacoesIdUseCase();
      const transacao = await deleteTransacoesIdUseCase.execute(id);

      if (!transacao) {
        return response.status(404).send('Transação não encontrada');
      }
      
      return response.send('Transação excluída.');
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = DeleteTransacoesIdController;

