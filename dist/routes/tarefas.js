"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TarefaController = require('../controllers/TarefaController');
const route = (0, express_1.Router)();
route.get('/tarefas', TarefaController.getTarefas);
route.get('/tarefa/:id', TarefaController.getUmaTarefa);
route.post('/tarefas', TarefaController.createTarefa);
route.patch('/tarefa/:id', TarefaController.updateTarefa);
route.delete('/tarefa/:id', TarefaController.deleteTarefa);
exports.default = route;
//# sourceMappingURL=tarefas.js.map