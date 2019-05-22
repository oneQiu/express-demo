const express = require('express');
const path = require('path');
const app = express();

// 引入分离的路由文件
const userRouter = require('./routes/user');
// ejs模板
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

// 中间件改变  post请求数据
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// 静态资源托管
app.use(express.static(path.resolve(__dirname,'./public')))

app.use('/api', userRouter);

app.listen(4444);
console.log('服务启动成功，请访问http://localhost:4444');