const { TransacoesRepository } = require('../repositories');

class DeleteTransacoesIdUseCase {
  async execute(id) {
    const repository = this._repositoryFactory();
    const transacao = await repository.findById(id);
    if (!transacao) {
      return null;
    }
    const deleted = await repository.delete(id);
    if (deleted) {
      return transacao;
    }
    return null;
  }

  _repositoryFactory() {
    return new TransacoesRepository();
  }
}

module.exports = DeleteTransacoesIdUseCase;
