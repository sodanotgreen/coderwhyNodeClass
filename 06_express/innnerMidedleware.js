const express = require('express')

const app = express()

// 内置中间件,内容在body内
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 请求日志插件morgan, 写入指定文件
const morgan = require('morgan')
app.use(morgan('combined', {
    stream: require('fs').createWriteStream('./access.log', { flags: 'a' })}))

// 文件上传中间件
const multer = require('multer')
const upload = multer({
  // dest: 'uploads/' // 上传文件存储目录'
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

// 上传文件接口,单文件single方法
app.post('/upload', upload.single('a'),(req, res) => {
  console.log(req.file)
  res.send('File uploaded successfully')
})   

// 上传多个文件
app.post('/uploads', upload.array('a'),(req, res) => {
  console.log(req.files)
  res.send('Files uploaded successfully')
})


app.post('/login/:id', (req, res) => {
  // 解析query参数
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
  res.status(403)
  res.json({
    code: 403,
    message: 'Forbidden'
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})