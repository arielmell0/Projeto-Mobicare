import { Tarefa, database } from "../models/TarefaModel"

(async () => {
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

exports.createTarefa = async (req, res) => {
    const { nome, conteudo, autor } = req.body;

    if(!nome) {
        res.status(422).json({ erro: "O nome da tarefa é obrigatório" })
        return
    }

    if(!conteudo) {
        res.status(422).json({ erro: "A tarefa deve ter um conteúdo" })
        return
    }

    if(!autor) {
        res.status(422).json( { erro: "A tarefa deve ter um autor" })
        return
    }

    const tarefa = {
        nome,
        conteudo,
        autor
    }

    try {
        const novaTarefa = await Tarefa.create(tarefa)
        res.status(200).json(novaTarefa)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Ops, algum erro ocorreu!' })
    }
}

exports.getTarefas = async(req, res) => {
    try {
        const tarefas = await Tarefa.findAll()
        return res.status(200).json(tarefas)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ erro: 'Ops, ocorreu um erro no servidor'})
    }   
}

exports.getUmaTarefa = async(req, res) => {
    try {
        const tarefa = await Tarefa.findByPk(req.params.id)
        if(!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada" })
        }
        return res.status(200).json(tarefa)
    } catch (error) {
        return res.status(500).json({ erro: 'Ops, ocorreu um erro no servidor'} )
    }
}

exports.updateTarefa = async(req, res) => {
    try {
        const { nome, conteudo, autor } = req.body

        const tarefaBody = {
            nome, 
            conteudo,
            autor
        }

        const tarefa = await Tarefa.findByPk(req.params.id)
        if(!tarefa) {
            return res.status(400).json({ erro: "Tarefa não encontrada"})
        }

        
        const updateTarefa = await tarefa.update(tarefaBody)
        return res.status(200).json(updateTarefa)
    } catch (error) {
        res.status(500).json({ erro: "Ops, ocorreu um erro no servidor" })
    }
}

exports.deleteTarefa = async(req, res) => {
    const tarefa = await Tarefa.findByPk(req.params.id)
    if(!tarefa) {
        return res.status(400).json({ erro: "Tarefa não encontrada" })
    }

    const deleteTarefa = await tarefa.destroy()
    return res.status(200).json({ message: "Tarefa excluida com sucesso!" })
}