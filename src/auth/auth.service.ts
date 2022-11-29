import { Injectable } from '@nestjs/common'
import { User, UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // 校验用户信息
  async validateUser(username: string, password: string): Promise<User | undefined> {
    console.log('2. auth 模块判断请求中的用户信息是否正确', { username, password })

    const user = await this.userService.findByName(username)
    if (user && user.password === password) {
      return user
    }
  }
}
