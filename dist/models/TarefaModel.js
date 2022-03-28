"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.Tarefa = void 0;
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
const database = new sequelize_1.Sequelize('crud', 'root', '', { host: 'localhost', dialect: 'mysql' });
exports.database = database;
const Tarefa = database.define('Tarefa', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    conteudo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    criadoEm: {
        type: sequelize_1.DataTypes.DATE,
        get() {
            return (0, moment_1.default)(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        }
    },
    ultimaAtualizacaoEm: {
        type: sequelize_1.DataTypes.DATE,
        get() {
            return (0, moment_1.default)(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.Tarefa = Tarefa;
//# sourceMappingURL=TarefaModel.js.map