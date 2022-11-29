import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtGuard } from './auth/jwt.guard'
import { UserModule } from './user/user.module'

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,

    // 使用全局守卫
    // 相对于每个 controller 都加上
    // @UseGuards(JwtGuard)
    { provide: APP_GUARD, useClass: JwtGuard },
  ],
})
export class AppModule {}
