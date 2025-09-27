import express from "express"
import cors from "cors"
import route from "./routers/resume.route.js"
import connectdb from "./db/connect.js"
import dotenv from "dotenv"
const app = express()

dotenv.config()
connectdb()

const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api",route)

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

app.listen(PORT,()=>{
    console.log(`run server on 5000`)
})

