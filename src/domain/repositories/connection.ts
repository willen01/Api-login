import mongoose from "mongoose";

class DbConnection {
  connection() {
    mongoose.connect(`${process.env.DB_URL_CONNECTION}`, (error) => {
      if (error) return console.log("Erro ao conectar com db ");
      console.log("db conectado com sucesso");
    });
  }
}

export default new DbConnection();
