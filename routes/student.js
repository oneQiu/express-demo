 const express = require('express');
const router = express.Router();
const stuCtrl = require('../controller/stuCtrl');

router.route('/stu').post(stuCtrl.addStu).get(stuCtrl.find)

module.exports = router;