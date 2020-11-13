import express, { json } from 'express'
import { router } from './routes'
import dotenv from 'dotenv'

const app = express()

app.use(json())
app.use(router)

dotenv.config()

export { app }
