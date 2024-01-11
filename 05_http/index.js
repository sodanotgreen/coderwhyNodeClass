const http = require('http')
const url = require('url')

// 创建http服务器
const server = http.createServer(
    (req, res) => {
      // console.log(req.url)
      // console.log(req.method)
      // console.log(req.headers)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
    }
)

// 开启服务器，设置监听端口
// 端口0-65535
server.listen(3000, () => {
  console.log('server is running at 3000')
})

// 设置监听路径
server.on('request', (req, res) => {
  // 解析query参数
  const query = url.parse(req.url, true).query;
  const query2 = new URLSearchParams(req.url);

  console.log(query, query2);

  if (req.method === 'POST') {
    console.log('收到post请求')
  }
  req.setEncoding('utf8') // 设置编码格式

  // 解析req里面的body, 本质可读流
  req.on('data', (data) => {
    console.log(JSON.parse(data))
  })

  res.statusCode = 403

  // 设置数据信息
  res.setHeader('Content-Type', 'text/plain')

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
    // 'Access-Control-Allow-Origin': 'XXXXXXXXXXXXXXXXXXXXX'
  })
  res.end('request')
})

// 底层原理
// const server2 = new http.Server();

// 浏览器除了访问网址，还会访问/favicon.icon

// 发送get请求
// http.get('XXXXXXXXXXXXXXXXXXXXX', (res) => {
  //   console.log(res.statusCode)
  //   res.on('data', (data) => {
    //     console.log(data)
  //   } 
// }

const req = http.request({
  method:'POST',
  hostname: '127.0.0.1',
  port: 3000,
}, (res) => {
  console.log(res.statusCode)
})

req.end() 