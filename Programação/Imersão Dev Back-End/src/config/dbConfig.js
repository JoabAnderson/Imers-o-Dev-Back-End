// Importa o driver do MongoDB para conectar ao banco de dados.
import { MongoClient } from 'mongodb';

// Exporta uma função assíncrona chamada conectarAoBanco.
export default async function conectarAoBanco(stringConexao) {
  // Declara uma variável para armazenar o cliente do MongoDB.
  let mongoClient;

  // Bloco try para lidar com a conexão ao banco de dados.
  try {
      // Cria uma nova instância do cliente do MongoDB usando a string de conexão.
      mongoClient = new MongoClient(stringConexao);
      // Exibe uma mensagem no console informando que a conexão está sendo estabelecida.
      console.log('Conectando ao cluster do banco de dados...');
      // Conecta ao banco de dados.
      await mongoClient.connect();
      // Exibe uma mensagem no console informando que a conexão foi bem-sucedida.
      console.log('Conectado ao MongoDB Atlas com sucesso!');

      // Retorna o cliente do MongoDB conectado.
      return mongoClient;
  } catch (erro) {
      // Bloco catch para lidar com erros durante a conexão.
      // Exibe uma mensagem de erro no console.
      console.error('Falha na conexão com o banco!', erro);
      // Encerra o processo com código de erro.
      process.exit();
  }
}