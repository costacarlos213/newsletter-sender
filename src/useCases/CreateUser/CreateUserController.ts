/* eslint no-useless-constructor: "off" */

import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handler(req: Request, res: Response): Promise<Response> {
    const data = req.body

    try {
      await this.createUserUseCase.execute(data)
      return res.status(201).json()
    } catch (err) {
      return res.status(500).json(err.message)
    }
  }
}
