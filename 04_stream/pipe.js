// pipe管道使用
var fs = require('fs');

const rs = fs.createReadStream('./input.txt');
const ws = fs.createWriteStream('./output.txt');

// rs.on('data', function (chunk) {
//     ws.write(chunk);
// });

// rs.on('end', function () {
//     ws.end();
// })

// 利用pipe
rs.pipe(ws);
console.log('程序执行完毕');