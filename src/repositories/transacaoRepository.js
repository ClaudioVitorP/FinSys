const Mongotransacoes = require('../models/mongotransacoes');
const { startConnection, closeConnection } = require('../infra/database');

class TransacoesRepository {
  constructor() {
    this.connection = null;
  }

  async create(transacao) {
    try {
      this.connection = await startConnection(); 
      const novaTransacao = new Mongotransacoes(transacao);
      await novaTransacao.save();
      return novaTransacao;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        await closeConnection(this.connection); 
        console.log('MongoDB disconnected');
        this.connection = null; 
      }
    }
  }

  async findAll() {
    try {
      this.connection = await startConnection(); 
      const transacoes = await Mongotransacoes.find();
      return transacoes;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        await closeConnection(this.connection); 
        console.log('MongoDB disconnected');
        this.connection = null; 
      }
    }
  }

  async findById(id) {
    try {
      this.connection = await startConnection(); 
      const transacao = await Mongotransacoes.findById(id);
      return transacao;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        await closeConnection(this.connection); 
        console.log('MongoDB disconnected');
        this.connection = null; 
      }
    }
  }

  async update(id, novosValores) {
    try {
      this.connection = await startConnection(); 
      const transacao = await Mongotransacoes.findById(id);

      if (!transacao) {
        return null;
      }

      transacao.descricao = novosValores.descricao || transacao.descricao;
      transacao.valor = novosValores.valor || transacao.valor;

      await transacao.save();
      return transacao;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        await closeConnection(this.connection); 
        console.log('MongoDB disconnected');
        this.connection = null; 
      }
    }
  }

  async delete(id) {
    try {
      this.connection = await startConnection(); 
      const transacao = await Mongotransacoes.findByIdAndDelete(id);

      if (!transacao) {
        return false;
      }

      return true;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        await closeConnection(this.connection); 
        console.log('MongoDB disconnected');
        this.connection = null; 
      }
    }
  }
}

module.exports = TransacoesRepository;
