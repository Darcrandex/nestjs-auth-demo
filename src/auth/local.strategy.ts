import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'

// 策略的名字
export const LOCAL_STRATEGY_NAME = 'the-local-strategy-name'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, LOCAL_STRATEGY_NAME) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(username: string, password: string) {
    console.clear()
    console.log('1. 请求接口 /auth/login 被 LocalStrategy 拦截', { username, password })

    const user = await this.authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException('用户名或密码错误')
    }
    return user
  }
}
