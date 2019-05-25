const stuModel = require('../model/student');

const addStu = (req, res) => {
    // 查询该用户是否存在
    let stuname = req.body.stuname;
    stuModel.findOne({
        stuname: stuname
    }).then((data) => {
        if (data) {
            res.send({
                code: -1,
                msg: '该学生已存在'
            })
            return;
        } else {
            // 注册学生信息
            let user = new stuModel(req.body);
            user.save().then(() => {
                res.send({
                    code: 0,
                    msg: '学生信息注册成功'
                })
            }).catch(err => {
                console.log(err);
                res.send({
                    code: -1,
                    msg: '学生信息注册失败'
                })
            })
        }
    })
}


// 学生查询显示
const find = (req, res) => {
    // 获得前端传入的数据
    let pageNum = parseInt(req.query.pageNum) || 1;
    let pageSize = parseInt(req.query.pageSize) || 10;


    // 模糊查询
    let name = req.query.stuname;

    stuModel.find({
        stuname: new RegExp(name)
    }).countDocuments().then(num => {
        // 计算总页数
        let totalPage = Math.ceil(num / pageSize);
        stuModel.find({
            stuname: new RegExp(name)
        }).skip(pageSize * (pageNum - 1)).limit(pageSize).then(data => {
            res.send({
                code: 0,
                msg: '查询成功',
                data: {
                    list: data,
                    totalPage
                }
            })
        }).catch(error => {
            console.log(error);
            res.send({
                code: -1,
                msg: '查询失败'
            })
        })
    })
}
// 删除学生
const delStu = (req, res) => {
    let stuname = req.body.stuname
}

module.exports = {
    addStu,
    find
}