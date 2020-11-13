/* eslint no-useless-constructor: "off" */

import { ICreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userRegistered = await this.userRepository.findByEmail(data.email)
    if (userRegistered) {
      throw new Error('User Already Createad')
    }

    const user = new User(data)
    await this.userRepository.save(user)
  }
}
