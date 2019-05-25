const jwt = require('jsonwebtoken');
let token = jwt.sign({
    username: 'cxk'
}, 'login');
console.log(token);

