const express = require('express')

// express是一个函数
const app = express();

// 处理跨域问题
app.use(
    (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      console.log('设置跨域')
      // 解析数据
      req.on('data', (data) => {
        console.log(JSON.parse(data.toString()))
        req.body= JSON.parse(data.toString())
      })

      req.on('end', () => {
        console.log('解析完成')
        next()
      })

    }
)

// 监听登陆接口
app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('登陆成功')
  console.log('登陆成功1')
  next()
})

// 什么是中间件-》回调函数，三个参数req,res,next
// 注册后依次匹配执行
app.use((req, res, next) => {

  next()
}, (req, res, next) => {
  console.log('这是一个中间件2')
  next()
})

// app.use('/login', (req, res,next) => {
//   res.send('use login')
//   next()
// })


// 启动服务器
app.listen(3000, () => {
  console.log('服务器启动成功')
})

