const Koa = require('koa')

const app = new Koa()

// 同步中间件
app.use((ctx, next) => {
  console.log('1')
  next()
  console.log('2')
})

app.use((ctx, next) => {
  console.log('3')
  next()
  console.log('4')
})

app.use((ctx, next) => {
  console.log('5')
  next()
  console.log('6')
})

// 打印顺序 1 3 5 6 4 2 洋葱模型
// 中间件模型
// next默认不会等待下一个async 中间件结果
// 等待的话需要await next（）

app.listen(3000, () => {
  console.log('server is running')
})