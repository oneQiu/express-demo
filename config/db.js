const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/apple';
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('数据库连接成功');
}).catch(error => {
    console.log('数据库连接失败', error.message);

})
module.exports = mongoose;