const db = require('../config/db');
const schema = new db.Schema({
    stuname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 18
    },
    sex: {
        type: Number,
        default: 0
    }
})
module.exports = db.model('student', schema);