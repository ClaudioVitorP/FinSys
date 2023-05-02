const express = require('express');
const routes = express.Router();

const { AddTransacoesController,
  ListarTransacoesIdController,
  EditTransacoesIdController,
  DeleteTransacoesIdController
} = require('../controllers');
const {TransacoesRepository} = require('../repositories')

const addTransacoesController = new AddTransacoesController();
const listarTransacoesIdController = new ListarTransacoesIdController();
const editTransacoesIdController = new EditTransacoesIdController();
const deleteTransacoesIdController = new DeleteTransacoesIdController();

routes.get('/', (request, response) => {
    response.send('Hello Word!');
});

routes.post('/transacoes', addTransacoesController.execute);

routes.get('/transacoes', async (request, response, next) => {
  try {
    const repository = new TransacoesRepository();
    const transacoes = await repository.findAll();
    response.json(transacoes);
  } catch (error) {
    next(error);
  }
});

routes.get('/transacoes/:id', listarTransacoesIdController.execute);

routes.put('/transacoes/:id', editTransacoesIdController.execute);

routes.delete('/transacoes/:id', deleteTransacoesIdController.execute);

module.exports = routes;

