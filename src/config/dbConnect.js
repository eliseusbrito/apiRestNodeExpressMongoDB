import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jonh:123@cluster0.6zgslwl.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;



