## 构建

尽量使用最简单的内容。只使用 auth 和 user 两个模块

```bash
nest new nestjs-auth-demo
cd nestjs-auth-demo

nest g mo auth
nest g co auth
nest g s auth

nest g mo user
nest g co user
nest g s user
```

## 依赖安装

```
pnpm add @nestjs/passport passport passport-local
pnpm add -D @types/passport-local

pnpm add @nestjs/jwt passport-jwt
pnpm add -D @types/passport-jwt
```

## 功能与目的

实现 身份验证，角色校验

### 流程

- 接口请求，被本地策略拦截，并验证通过
