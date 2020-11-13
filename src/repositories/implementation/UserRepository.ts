import { EntityRepository, Repository, createConnection } from 'typeorm'
import { User } from '../../entities/User'
import { IUserRepository } from '../IUserRepository'

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('user.email = :email', {
        email
      })
      .getOne()
  }

  async returnCustomRepository(): Promise<UserRepository> {
    const connection = await createConnection({
      type: 'sqlite',
      database: './db.sqlite',
      logging: true,
      synchronize: true,
      entities: [User]
    })

    return await connection.getCustomRepository(UserRepository)
  }
}
