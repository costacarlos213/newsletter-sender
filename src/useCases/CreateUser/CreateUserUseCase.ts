/* eslint no-useless-constructor: "off" */

import { ICreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../../entities/User'
import { IUserRepository } from '../../repositories/IUserRepository'
import { IMailProvider } from '../../providers/IMailProvider'

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userRegistered = await this.userRepository.findByEmail(data.email)
    if (userRegistered) {
      throw new Error('User Already Createad')
    }

    const user = new User(data)
    await this.userRepository.save(user)
    await this.mailProvider.sendEmail({
      from: {
        name: 'No-Reply',
        address: 'noip2223@gmail.com'
      },
      to: {
        name: data.name,
        address: data.email
      },
      subject: 'Newsletter',
      text: `Welcome to the system Mr. ${data.surname}`
    })
  }
}
