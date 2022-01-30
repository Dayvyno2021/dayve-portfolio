import express from 'express'
import path from 'path'
import colors from "colors"
import dotenv from 'dotenv'
import {notFound} from './middleware/errorMiddleware.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())


const __dirname = path.resolve()

if (process.env.NODE_ENV==="production"){
  app.use('/static', express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
  app.get('/', (req, res)=>{
    res.send("This app is working")
  })
}

notFound

const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`This app is working on port ${PORT} in ${process.env.NODE_ENV} mode`.rainbow))