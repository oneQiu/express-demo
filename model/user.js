// 这个文件需要操作数据库中的表
const db = require('../config/db');

const schema = new db.Schema({
    username: {
        type: String,
        required: true //必填
    },
    password: {
        type: String,
        required: true //必填
    },
    admin: {
        type: Number,
        default: 0
    },
    sex: {
        type: Number,
        default: 0
    }
})

module.exports = db.model('user', schema);