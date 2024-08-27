import cors from "cors"
import express  from "express";
// Configuração do CORS
export const app = express();

app.use(cors());

// Outras configurações e rotas do seu servidor
app.get('/', (req:any, res:any) => {
  res.json({ message: 'API funcionando corretamente!' });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


