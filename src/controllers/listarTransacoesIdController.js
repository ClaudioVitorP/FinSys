const { ListarTransacoesIdUseCase } = require('../useCases');

class ListarTransacoesIdController {
  async execute(request, response) {
    const listarTransacoesIdUseCase = new ListarTransacoesIdUseCase();
    try {
      const id = request.params.id;
      const transacao = await listarTransacoesIdUseCase.execute(id)
      if (!transacao) {
        return response.status(404).send('Transação não encontrada');
      }
      return response.json(transacao);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = ListarTransacoesIdController;
