import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserService } from 'src/user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy, JWT_SECRET } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory() {
        return { secret: JWT_SECRET }
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
