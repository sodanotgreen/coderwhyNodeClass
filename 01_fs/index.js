const fs = require('fs');

// 1. 同步读取 sync
// 不传解析方式返回buffer array以二进制读取
// const data = fs.readFileSync('./data.txt', 'utf-8');
// console.log(data);
// console.log('sync');


// 2. 异步读取
// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log('async');

// 3. promise读取
// fs.promises.readFile('./data.txt', 'utf-8').then(
//   data => {
//     console.log(data);
//   }
// ).catch(
//     err => {
//       console.log(err);
//     }
// )
// console.log('promise');

// 文件描述符，进程维护的打开文件与标识符的表格
// node屏蔽系统差异，为文件提供一个数字类型的描述符 
// const fd = fs.openSync('./data.txt', 'r');
// console.log(fd);

fs.open('./data.txt', 'r', (err, fd) => {
  console.log(fd);
  // 获取文件信息
  fs.fstat(fd, (err, stat) => {
    console.log(stat);
  })

  fs.writeFile(fd, 'hello', err => {
    console.log(err);
  })

  // 手动关闭
  fs.close(fd, err => {
    console.log(err);
  });
});