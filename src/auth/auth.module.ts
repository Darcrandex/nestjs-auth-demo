import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserService } from 'src/user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy],
})
export class AuthModule {}
