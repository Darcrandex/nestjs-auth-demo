import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'

export const JWT_STRATEGY_NAME = 'the-jwt-strategy-name'
export const JWT_SECRET = 'my-jwt-secret'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY_NAME) {
  constructor() {
    super({
      // 秘钥一般放到 env 变量中
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      jsonWebTokenOptions: { maxAge: '24h' },
    } as StrategyOptions)
  }

  async validate(signPayload: unknown) {
    console.log('2. JwtStrategy 从请求头中获取 token 并解析；成功后把解析内容返回')

    return signPayload
  }
}
