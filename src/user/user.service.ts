import { Injectable } from '@nestjs/common'

export interface User {
  id: string
  username: string
  password: string
  nickname: string
  role: 'admin' | 'account'
}

@Injectable()
export class UserService {
  // 模拟数据库
  private readonly users: User[] = [
    { id: '001', username: 'aaa', password: '123', nickname: '张三', role: 'admin' },
    { id: '002', username: 'bbb', password: '123', nickname: '李四', role: 'account' },
  ]

  async findByName(username: string) {
    console.log('3. user 模块根据用户名查询匹配的用户', { username })

    return this.users.find((v) => v.username === username)
  }

  async findById(id: string) {
    return this.users.find((v) => v.id === id)
  }

  async findAll() {
    return this.users
  }
}
