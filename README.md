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
- 创建 token 并返回给前端
- 前端发送请求时，把 token 放到 header 中，后端通过 jwt-strategy 获取

### 守卫

守卫的作用只是用来触发对应名称的策略类

### 策略

策略类会将控制器拦截，先处理自身的逻辑，校验成功后再把校验结果返回给控制器；控制器继续处理自身的逻辑

### 测试

启动后，使用 postman 请求以下接口，在控制台中查看日志

1. /auth/login 获取 token
2. /user/info 请求前设置 token
