import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("erro", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log('Conexão com o Banco realizada com sucesso')
})

const app = express()

app.use(express.json())

routes(app)

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app