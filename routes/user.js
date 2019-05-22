const express = require('express');
const router = express.Router();
// 回调函数     分离代码 更加整洁可观
const UserCtrl = require('../controller/userCtrl');

router.post('/reg', UserCtrl.reg);
router.post('/login', UserCtrl.login);
router.post('/delete', UserCtrl.del);
router.post('/update', UserCtrl.update);
module.exports = router;