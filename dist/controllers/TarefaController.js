"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TarefaModel_1 = require("../models/TarefaModel");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultado = yield TarefaModel_1.database.sync();
        console.log(resultado);
    }
    catch (error) {
        console.log(error);
    }
}))();
exports.createTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, conteudo, autor } = req.body;
    if (!nome) {
        res.status(422).json({ erro: "O nome da tarefa é obrigatório" });
        return;
    }
    if (!conteudo) {
        res.status(422).json({ erro: "A tarefa deve ter um conteúdo" });
        return;
    }
    if (!autor) {
        res.status(422).json({ erro: "A tarefa deve ter um autor" });
        return;
    }
    const tarefa = {
        nome,
        conteudo,
        autor
    };
    try {
        const novaTarefa = yield TarefaModel_1.Tarefa.create(tarefa);
        res.status(200).json(novaTarefa);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Ops, algum erro ocorreu!' });
    }
});
exports.getTarefas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarefas = yield TarefaModel_1.Tarefa.findAll();
        return res.status(200).json(tarefas);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ erro: 'Ops, ocorreu um erro no servidor' });
    }
});
exports.getUmaTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarefa = yield TarefaModel_1.Tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada" });
        }
        return res.status(200).json(tarefa);
    }
    catch (error) {
        return res.status(500).json({ erro: 'Ops, ocorreu um erro no servidor' });
    }
});
exports.updateTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, conteudo, autor } = req.body;
        const tarefaBody = {
            nome,
            conteudo,
            autor
        };
        const tarefa = yield TarefaModel_1.Tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(400).json({ erro: "Tarefa não encontrada" });
        }
        const updateTarefa = yield tarefa.update(tarefaBody);
        return res.status(200).json(updateTarefa);
    }
    catch (error) {
        res.status(500).json({ erro: "Ops, ocorreu um erro no servidor" });
    }
});
exports.deleteTarefa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tarefa = yield TarefaModel_1.Tarefa.findByPk(req.params.id);
    if (!tarefa) {
        return res.status(400).json({ erro: "Tarefa não encontrada" });
    }
    const deleteTarefa = yield tarefa.destroy();
    return res.status(200).json({ message: "Tarefa excluida com sucesso!" });
});
//# sourceMappingURL=TarefaController.js.map