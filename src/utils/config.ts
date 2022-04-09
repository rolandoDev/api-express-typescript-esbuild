import * as dotenv from "dotenv";
import path from "path";

if(path.basename(__filename) === 'index.js'){
    const configEnv = dotenv.config({path: path.join(__dirname, '.env')});
}else{
    const configEnv = dotenv.config();
}
const config = {
    PORT: process.env.PORT || 3001,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_KEY: process.env.API_KEY || "",
    DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost:27017/test",
}
export { config };


