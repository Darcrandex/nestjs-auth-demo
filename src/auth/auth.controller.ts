import { Controller, Post, UseGuards, Request } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/user.service'
import { PublicRoute } from './jwt.guard'
import { LocalAuthGuard } from './local.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @PublicRoute()
  // 注意
  // 请求这个接口时，必须传参（完整参数）；否则会直接返回 401，不会进入校验函数
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: User }) {
    console.log('4. /auth/login 登录信息校验通过，并从 Request 中返回 user', req.user)

    const token = this.jwtService.sign(req.user)
    return token
  }
}
