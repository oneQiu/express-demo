// 校验token中间件
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 获得前端传入的数据
    let token = req.get('access_token');
    console.log(token);
    
    if (!token) {
        res.send({
            code: -1,
            msg: 'token不存在'
        })
    } else {
        jwt.verify(token, 'icon', (err, data) => {
            if (err) {
                res.send({
                    code: -1,
                    msg: err.message
                })
            }else{
                console.log(data);
                req.id = data.id;
                next();
            }
        })
    }
}