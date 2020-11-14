import express, { json } from 'express'
import { router } from './routes'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.use(json())
app.use(cors())
app.use(router)

dotenv.config()

export { app }
