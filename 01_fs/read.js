const fs = require('fs')

const context = 'aaa'

// 文件写入操作,不存在会自动创建
fs.writeFile('./test.txt', context, {
  flag:'w',
  encoding:'utf-8' // 编码格式，默认utf-8'
},err => {
  if (err) throw err
  console.log('写入成功')
})
// 文件读取操作
fs.readFile('./test.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})

// flag
// w，表示只写，自动创建
// a，表示追加，自动创建
// r，表示只读，不自动创建
// w+，表示读写，自动创建