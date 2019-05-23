# API文档
----
PS：以下文档的urlBase均为：http//localhost:4444
## 注册用户
### 描述：
- 用户注册接口
### 请求URL：
- user/reg
### 请求方式：
- POST
### 请求参数：
| 参数名 | 类型 | 必须 | 备注 |
|----|----|----|----|
| username | String | Y | 用户名 |
| password | String | Y | 密码 |
| admin | Number | N | 0用户 1管理员 |
| sex | Number | Y | 1男 0女 |
### 返回实例
```js
    {
        username: '蔡徐坤',
        password: 'cxk',
        admin: 0,
        sex: 0
    }
```
### 返回参数说明
| 参数名 | 类型 | 备注 |
|----|----|----|
| code | Number | -1为失败，0为成功 |
----
## 学生添加
### 描述：
- 添加学生接口
### 请求URL：
- stu/add
### 请求方式：
- POST
### 请求参数：
| 参数名 | 类型 | 必须 | 备注 |
|----|----|----|----|
| stuname | String | Y | 用户名 |
| age | Number | N | 年龄 |
| sex | Number | N | 1男 0女 |
### 返回实例
```js
    {
        stuname: '蔡徐坤',
        age: 18,
        sex: 0
    }
```
### 返回参数说明
| 参数名 | 类型 | 备注 |
|----|----|----|
| code | Number | -1为失败，0为成功 |
