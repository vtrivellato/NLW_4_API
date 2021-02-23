import { Router } from 'express'
import { UsersController } from './src/controllers/UsersController'

const router = Router()

const usersController = new UsersController()

router.post('/users', usersController.create)

export { router }