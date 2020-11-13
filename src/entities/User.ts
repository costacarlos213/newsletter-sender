import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string

  @Column('varchar', { length: 20 })
  public readonly name: string

  @Column('varchar', { length: 20 })
  public readonly surname: string

  @Column('varchar', { length: 50 })
  public readonly email: string

  constructor(user: Omit<User, 'id'>) {
    Object.assign(this, user)
  }
}
