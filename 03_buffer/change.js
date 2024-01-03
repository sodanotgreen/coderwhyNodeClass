// 1.创建buffer,不推荐new创建
var buf = new Buffer('hello');
console.log(buf);

// 1.创建buffer，推荐的方法, 默认编码utf-8， 一个中文3个字节，英文1字节
var buf2 = Buffer.from('你好');
console.log(buf2);

// 手动制定buffer创建的编码
var buf3 = Buffer.from('你好', 'utf-16le');
console.log(buf3);

// 解码buffer,解码转码方法需要一直
console.log(buf3.toString('utf-8'));  

// alloc方式创建buffer，申请内存传入size,后台默认申请8kb的poolsize，然后大家分配， 底层fastbuffer从pool里面分
// >8kb 则申请8kb << 1的内存
var buf4 = Buffer.alloc(10);

console.log(buf4);

// 自动转16进制
buf4[0] = 100
console.log(buf4);

// 从文件读取buffer
var buf5 = Buffer.alloc(10);
var fs = require('fs');
fs.readFile('./data.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.copy(buf5);
    console.log(buf5);
  }
})