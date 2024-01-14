const express = require('express')

// express是一个函数
const app = express();

// 使用路由创建监听url
const userRouter = express.Router()
userRouter.get('/list',(req,res)=>{
    res.send('user list')
})
userRouter.get('/add',(req,res,next)=>{
    next(-402)
    // res.json({
    //     code:200,
    //     message:'user add'
    // })
})

app.use('/user',userRouter)

// 错误信息处理中间件
app.use((err,req,res,next)=>{
    res.json({
        code:err,
        message:'error'
    })
})

// 部署静态资源服务器
app.use(express.static('./uploads'))

app.listen(3000,()=>{
    console.log('服务器启动成功');
})