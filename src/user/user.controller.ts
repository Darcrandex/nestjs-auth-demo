import { BadRequestException, Controller, Get, Param, Request } from '@nestjs/common'
import { PublicRoute } from 'src/auth/jwt.guard'
import { User, UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(JwtGuard)
  @Get('info')
  async userInfo(@Request() req: { user: User }) {
    console.log('3. 接口接收从 JwtStrategy 返回的内容', req.user)
    const user = await this.userService.findById(req.user.id)
    return user
  }

  @Get()
  async getUsers() {
    return this.userService.findAll()
  }

  // 单独给指定的路由开放权限，不需要token
  @PublicRoute()
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.findById(id)

    if (user) {
      return user
    } else {
      throw new BadRequestException('找不到匹配的用户')
    }
  }
}
