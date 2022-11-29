import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'
import { JWT_STRATEGY_NAME } from './jwt.strategy'

export const IS_PUBLIC_KEY = 'the-route-is-public-for-jwt'
export const PublicRoute = () => SetMetadata(IS_PUBLIC_KEY, true)
export const PrivateRoute = () => SetMetadata(IS_PUBLIC_KEY, false)

@Injectable()
export class JwtGuard extends AuthGuard(JWT_STRATEGY_NAME) implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublicRoute = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()])

    console.log('1. JwtGuard 拦截')

    return isPublicRoute || super.canActivate(context)
  }
}
