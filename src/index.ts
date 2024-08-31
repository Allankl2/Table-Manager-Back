import cors from "cors"
import express  from "express"


//importação de rotas

import RoutesTable  from "./Http/Router/RoutesTables"


class App{
  public routesTable:any
  public app:express.Application // esse aplication e o tipo que o express fornece a applicalçao
  constructor(){
    this.routesTable =  RoutesTable;
    this.app = express()
    this.config();
    this.routes()
  }



  public config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }
  public middlewares():void{
  
    this.app

    this.app.use(cors());
  }

  public routes():void {
    this.app.use("/", this.routesTable)
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        "  API is running at http://localhost:%d",
        this.app.get("port")
      );
    });
  }
}

const server = new App()

server.start()