import mongoose from "mongoose"
import mongosse from "mongoose"

const livrosSchema = new mongosse.Schema(
    {
        id: { type: String },
        titulo: { type: String, required: true },
        autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
        editora: { type: String, required: true },
        numeroPaginas: { type: Number }
    }
)

const livros = mongosse.model('livros', livrosSchema)

export default livros