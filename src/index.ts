import cors from "cors"
import express, { Application }  from "express"

//importação de rotas

import RoutesTable from "./Http/Router/RoutesTables"


class App{

  public app:Application // esse aplication e o tipo que o express fornece a applicalçao
  constructor(){
    this.app = express()
    this.middlewares();
    this.routes()
  }

  middlewares(){
    this.app.use(cors());
  }

  routes(){
    this.app.use("/tables", RoutesTable)
  }
}
// Outras configurações e rotas do seu servidor
app.get('/', (req:any, res:any) => {
  res.json({ message: 'API funcionando corretamente!' });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


