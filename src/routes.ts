import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const router = Router()

router.post('/users', async (req, res) => {
  return (await createUserController).handler(req, res)
})

export { router }
