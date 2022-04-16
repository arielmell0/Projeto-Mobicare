import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'

const database = new Sequelize('crud', 'root', '', {host: 'localhost', dialect: 'mysql'});

const Tarefa = database.define('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true    
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    conteudo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    criadoEm: {
        type: DataTypes.DATE,                
        get() {
            return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        }
    },
    ultimaAtualizacaoEm: {
        type: DataTypes.DATE,                
        get() {
            return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
        }
    }
}, {
        createdAt: false,
        updatedAt: false
    })

export { Tarefa, database }
