const { AddTransacoesUseCase } = require('../useCases');

class AddTransacoesController {
  async execute(request, response, next) {
    const { descricao, valor } = request.body;
    try {
      const addTransacoesUseCase = new AddTransacoesUseCase();
      const transacaoCriada = await addTransacoesUseCase.execute(descricao, valor);
      response.status(201).json(transacaoCriada);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = AddTransacoesController;