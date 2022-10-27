import mongosse from "mongoose"

const livrosSchema = new mongosse.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: String, required: true },
        editora: { type: String, required: true },
        numeroPaginas: { type: Number }
    }
)

const livros = mongosse.model('livros', livrosSchema)

export default livros