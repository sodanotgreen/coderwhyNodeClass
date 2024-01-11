const http = require('http')

const server = http.createServer(
    (req, res) => {
      req.setEncoding('binary')

  // console.log(req.headers)

  // 获取boundary
  let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')

  let img = ''
  req.on('data', (data) => {
      img += data
  })

  req.on('end', () => {
    console.log(3)
    console.log(img)
    console.log(1)
    // 截取开始
    let start = img.indexOf('image/jpeg') + 'image/jpeg'.length
    
    img = img.substring(start)

    img.replace(/^\s\s*/,'')

    // 替换最后的boundary
    img = img.replace(boundary, '')

    console.log(img)
  })
 
  res.end('ok');
}
)

// 开启服务器，设置监听端口
// 端口0-65535
server.listen(3000, () => {
  console.log('server is running at 3000')
})