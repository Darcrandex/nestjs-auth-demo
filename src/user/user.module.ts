import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  providers: [UserService],

  // 由于 auth 模块也需要使用这个 service
  // 因此需要导出
  exports: [UserService],
})
export class UserModule {}
