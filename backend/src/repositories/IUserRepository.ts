import { User } from '../entities/User'
import { UserRepository } from './implementation/UserRepository'

interface IUser {
  name: string
  surname: string
  email: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  save(user: IUser): Promise<void>
  returnCustomRepository(): Promise<UserRepository>
}
