import {config} from "dotenv"

config();
//mandar al archivo de mongoose 
export const MONGODB_URI= process.env.MONGODB_URI || "mongodb+srv://omarcatzin:123456789o@clustersm52.37aaz.mongodb.net/conversion?authSource=admin&replicaSet=atlas-2kgt66-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
