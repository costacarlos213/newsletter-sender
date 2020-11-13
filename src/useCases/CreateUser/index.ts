import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'
import { UserRepository } from '../../repositories/implementation/UserRepository'

async function CreateUserControllerFunction() {
  const userRepository = await new UserRepository().returnCustomRepository()

  const createUserUseCase = new CreateUserUseCase(userRepository)

  return new CreateUserController(createUserUseCase)
}

const createUserController = CreateUserControllerFunction()

export { createUserController }
