const express = require('express');
const router = express.Router();
const auth = require('../middle/auth');
// 回调函数     分离代码 更加整洁可观
const UserCtrl = require('../controller/userCtrl');
const multer = require('multer');
// 设置临时文件的目录
const upload = multer({
    dest: 'C:\Users\lemon\Desktop'
})

router.post('/reg', UserCtrl.reg);
router.post('/login', UserCtrl.login);
router.post('/delete', UserCtrl.del);
router.post('/update', UserCtrl.update);
router.post('/user/upload', auth, upload.single('icon'), UserCtrl.upload);
module.exports = router;