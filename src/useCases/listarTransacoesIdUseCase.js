const { TransacoesRepository } = require('../repositories');
const mongoose = require('mongoose');

class ListarTransacoesIdUseCase {
  async execute(id) {
    const repository = this._repositoryFactory();
    
    if (!mongoose.isValidObjectId(id)) {
      throw new Error('ID inválido');
    }

    const transacao = await repository.findById(id);
    return transacao;
  }

  _repositoryFactory() {
    return new TransacoesRepository();
  }
}

module.exports = ListarTransacoesIdUseCase;
