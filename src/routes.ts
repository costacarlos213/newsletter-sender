import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const router = Router()

router.get('/', async (req, res) => {
  return (await createUserController).handler(req, res)
})

export { router }
