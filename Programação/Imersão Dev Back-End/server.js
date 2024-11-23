// Importa o módulo Express.js para criar o servidor web.
import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Define um array de posts para fins de exemplo (será substituído por dados do banco de dados).
// const posts = [
//   {
//     id: 1,
//     descricao: "Uma foto teste",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 2,
//     descricao: "Passeio no parque com meu cachorro",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 3,
//     descricao: "Delícia de bolo caseiro",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 4,
//     descricao: "Paisagem linda da montanha",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 5,
//     descricao: "Novo livro que estou lendo",
//     imagem: "https://placecats.com/millie/300/150"
//   },
//   {
//     id: 6,
//     descricao: "Café da manhã nutritivo",
//     imagem: "https://placecats.com/millie/300/150"
//   }
// ];

// Cria uma instância do aplicativo Express.js.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});





// function buscarPostPorID(id){
//   return posts.findIndex((post) => {
//     return post.id == Number(id);
//   });
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorID(req.params.id);
//   res.status(200).json(posts[index]);
// }); 

/* app.get("/livros", (req, res) => {
  res.status(200).send({
    titulo: "O poder do Habito",
    autor: "Charles Duhigg",
    ano: "2012",
    genero: "Auto-Ajuda"
  });
});*/