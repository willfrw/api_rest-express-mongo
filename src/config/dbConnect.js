import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:%40admin123@cluster0.ozr87.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    
    return mongoose.connection;
}

export default conectaNaDataBase;