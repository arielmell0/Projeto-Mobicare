import { Router } from 'express'
const TarefaController = require('../controllers/TarefaController')

const route = Router()

route.get('/tarefas', TarefaController.getTarefas)
route.get('/tarefa/:id', TarefaController.getUmaTarefa)

route.post('/tarefas', TarefaController.createTarefa)

route.patch('/tarefa/:id', TarefaController.updateTarefa)

route.delete('/tarefa/:id', TarefaController.deleteTarefa)

export default route