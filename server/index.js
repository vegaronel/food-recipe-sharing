import express from "express"
import env from "dotenv"
import cors from "cors"
const app = express();
const port = process.env.PORT || 3000;

env.config();
app.use(cors());

app.get('/', (req, res)=>{
    res.json("BOBO ka")
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})