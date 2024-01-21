const express = require('express')

const app = express()

// 同步中间件
app.use((req, res, next) => {
  console.log('1')
  next()
  console.log('2')
})

app.use((req, res, next) => {
  console.log('3')
  next()
  console.log('4')
})

app.use((req, res, next) => {
  console.log('5')
  next()
  console.log('6')
})

// 顺序1 3 5 6 4 2 中间件模型

// express异步处理
app.use((req, res, next) => {
  // 处理异步无法处理
  // express本身缺陷 
})

app.listen(3001, () => {
  console.log('server is running')
})
