import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll()
  }

  @Get('info')
  getUserById() {
    const id = '001'
    const user = this.userService.findById(id)
    return user
  }
}
