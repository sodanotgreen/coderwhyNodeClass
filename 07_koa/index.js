// 创建koa app
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
  // //kao的请求
  // console.log(ctx.request);
  // // 打印node的请求对象
  // console.log(ctx.req);
  // // 打印kao响应对象 
  // console.log(ctx.response);
  // // 打印node的响应对象
  // console.log(ctx.res);
  // // 打印query、params参数 
  // console.log(ctx.query);
  // console.log(ctx.params);

  ctx.body = 'hhh'
  await next();
})

// 路由的使用
const koaRouter = require('@koa/router');
const router = new koaRouter({prefix: '/user'});
router.get('/test',(ctx,next)=>{
    // 错误处理
    ctx.app.emit('error', -1003, 'xxx')
})

const multer = require('@koa/multer')
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
});

const fs = require('fs')
router.post('/test',upload.single('a'),(ctx,next)=>{
  console.log(ctx.request.file)
  ctx.body = fs.createReadStream('./uploads/170541565361509a715f2880f11ebb6edd017c2d2eca2.jpg')
  ctx.type = 'image/jpeg'
})
app.use(router.routes());

// 静态服务器
const static = require('koa-static');
app.use(static(__dirname + '/static'));

// 解析jason
const paser = require('koa-bodyparser');
app.use(paser());

// 独立文件
app.on('error',(err)=>{
  console.log(err);
})

// 解析上传文件
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
// app.use(upload.single('a'));

// 函数签名
/**
 * 判断是否水仙花数
 * @param {number} a 数字
 * @returns {boolean}
 */
function isDaffodilNumber(a) {
    let b = a.toString().split('').reverse().join('');
    return a*a == b*b;
}

app.listen(3000,()=>{
    console.log('服务器启动成功');
})