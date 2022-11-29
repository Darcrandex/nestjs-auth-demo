import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { LOCAL_STRATEGY_NAME } from './local.strategy'

@Injectable()
export class LocalAuthGuard extends AuthGuard(LOCAL_STRATEGY_NAME) {
  constructor() {
    super()
    console.log('注册 LocalAuthGuard')

    // 当守卫被激活时，会通过策略的名称去查询相应的策略，并执行策略的校验函数
  }
}
