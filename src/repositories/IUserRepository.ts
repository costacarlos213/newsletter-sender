import { User } from '../entities/User'
import { UserRepository } from './implementation/UserRepository'

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  save(user: Omit<User, 'id'>): Promise<void>
  returnCustomRepository(): Promise<UserRepository>
}
