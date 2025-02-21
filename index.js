const cors=require('cors')
const express=require('express')
const connectDb = require('./config/connectDb')
const TodoRouter = require('./routes/todo.routes')

const app=express()

app.listen(3030, ()=>{
console.log('[server] is running')
connectDb()
})

app.use(express.json())
app.use(cors())

app.use('/todo',TodoRouter)