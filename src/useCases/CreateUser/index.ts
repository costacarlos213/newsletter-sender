import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'
import { UserRepository } from '../../repositories/implementation/UserRepository'
import { MailProvider } from '../../providers/implementation/MailProvider'

async function CreateUserControllerFunction() {
  const userRepository = await new UserRepository().returnCustomRepository()
  const mailProvider = new MailProvider()

  const createUserUseCase = new CreateUserUseCase(userRepository, mailProvider)

  return new CreateUserController(createUserUseCase)
}

const createUserController = CreateUserControllerFunction()

export { createUserController }
