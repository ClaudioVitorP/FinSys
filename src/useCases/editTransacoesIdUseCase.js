const { TransacoesRepository } = require('../repositories');

class EditTransacoesIdUseCase {
  async execute(id, descricao, valor) {
    const repository = this._repositoryFactory();
    const transacao = await repository.findById(id);
    if (!transacao) {
      throw new Error('Transação não encontrada');
    }
    transacao.descricao = descricao;
    transacao.valor = valor;
    await repository.update(id, transacao);
    return transacao;
  }

  _repositoryFactory() {
    return new TransacoesRepository();
  }
}

module.exports = EditTransacoesIdUseCase; 
