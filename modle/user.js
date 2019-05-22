// 这个文件需要操作数据库中的表
const db = require('../config/db');

const schema = new db.Schema({
    username: String,
    password: String,
    number: Number,
    sex: {
        type: number,
        default: 0
    }
})

module.exports = db.model('user', schema);