import { app } from './app.js'
import dotenv from 'dotenv'
import { initDB } from './db/initdb.js'
dotenv.config()

const PORT = process.env.PORT

await initDB()
app.listen(PORT)
console.log(`Server is running on http://localhost:${PORT}`)