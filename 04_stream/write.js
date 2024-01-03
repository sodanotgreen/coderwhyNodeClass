const fs = require('fs')

// 可写流
const ws = fs.createWriteStream('./write.txt', {
  encoding: 'utf8',
  flags: 'a+',
  start: 7,
})

ws.write('hello')
ws.write('world')
ws.end('hhh')
// ws.on('finish', () => {
//   console.log('写入完成')
//   ws.close()
// })

// 监听close
ws.on('close', () => {
  console.log('close')
})