import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { JwtGuard } from 'src/auth/jwt.guard'
import { User, UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll()
  }

  @UseGuards(JwtGuard)
  @Get('info')
  getUserById(@Request() req: { user: User }) {
    console.log('3. 接口接收从 JwtStrategy 返回的内容', req.user)
    const user = this.userService.findById(req.user.id)
    return user
  }
}
