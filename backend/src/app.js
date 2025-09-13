import express from 'express'
import { postRoutes } from './routes/posts'
const app = express()
postRoutes(app)

app.get('/', (req, res) => {   res.send('Hello from Express!') })

export {app}