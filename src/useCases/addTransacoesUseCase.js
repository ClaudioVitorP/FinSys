const crypto = require('crypto');
const { TransacoesRepository } = require('../repositories');

class AddTransacoesUseCase {
  async execute(descricao, valor) {
    const id = generateId();
    const data = new Date();
    const transacao = {
      id,
      descricao,
      valor,
      data,
    };
    const repository = await this._repositoryFactory();
    await repository.create(transacao);
    return ("Transação criada com sucesso.");
  }

  async _repositoryFactory() {
    return new TransacoesRepository();
  }
}

function generateId() {
  const id = crypto.randomBytes(12).toString('hex');
  return id;
}

module.exports = AddTransacoesUseCase;
