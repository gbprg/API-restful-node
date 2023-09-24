import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados!");
  } catch (error) {
    Logger.error("Erro ao conectar ao banco de dados!");
    Logger.error(`Erro: ${error}`);
    process.exit(1);
  }
}

export default connect;
