const cors=require('cors')
const express=require('express')
const connectDb = require('./config/connectDb')
const TodoRouter = require('./routes/todo.routes')
const {config} = require("dotenv");
config();

const app=express()
app.use(express.json())
app.use(cors())
const DB_URL = process.env.MONGO_URL

app.listen(3030, async ()=>{
console.log('[server] is running')
connectDb(DB_URL);
})



app.use('/todo', TodoRouter);