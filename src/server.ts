import * as dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import routeTarefa from './routes/tarefas'
const app = express()
const port = 3030

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(routeTarefa)
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Boas vindas à API de criação de tarefas!' })
})

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`)
})