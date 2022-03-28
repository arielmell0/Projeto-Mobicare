import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'

const database = new Sequelize('mysql://b338f1244a4c6c:e56f1c77@us-cdbr-east-05.cleardb.net/heroku_2d7b4808a116a12?reconnect=true');

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
