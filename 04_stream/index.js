// 所有的流都是eventemit,可以直接监听
// 读取流，写入流， 读写流socket用， 转换流

// 读取流
var fs = require('fs');
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt', {
  start: 3,
  end: 20,
  // 每次读几个
  highWaterMark: 3,
  encoding: 'utf-8',
});

// readerStream继承eventemit实例

// 处理流事件
// data事件， start，end均包含
readerStream.on('data', function(chunk) {
    console.log(chunk);
    // 暂停
    readerStream.pause();
    // 继续读取
    setTimeout(function() {
        readerStream.resume();
        console.log('继续读取');
    }, 500);
})

// 监听打开事件
readerStream.on('open', function(fd) {
    console.log('打开文件',fd);
})

// 监听结束事件
readerStream.on('end', function() {
    console.log(data);

    //关闭
    readerStream.close();
})

// 监听关闭
readerStream.on('close', function() {
    console.log('文件关闭');
})

// 处理错误事件
readerStream.on('error', function(err) {
    console.log(err.stack);
})