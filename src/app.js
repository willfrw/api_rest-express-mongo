import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); 
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;

//mongodb+srv://admin:@admin123@cluster0.ozr87.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0