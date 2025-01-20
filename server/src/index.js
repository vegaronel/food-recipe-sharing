import express from "express"
import env from "dotenv"
import cors from "cors"
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"


const app = express();
const port = process.env.PORT || 3000;

env.config();
app.use(cors());
app.use(express.json());

// CREATE TABLE FOR POSTGRES
db.createTableIfNotExist();

app.use("/api", userRoutes);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})