const { error } = require('console');
const fs = require('fs');

// fs.mkdir('./lmz', error => {
//     if(error){
//         console.log(error);
//     }
// })

fs.readdir('../', (error, files) => {
    if(error){
        console.log(error);
    }
    console.log(files);
})

// 读取具体文件信息
// 1 文件， 2 目录， 3 其他
fs.readdir('../', {withFileTypes: true}, (error, files) => {
    if(error){
        console.log(error);
    }
    console.log(files);
    
    // 遍历读取文件
    files.forEach(file => {
        console.log(file.name);
        // 是否文件夹
        console.log(file.isDirectory());
        // 是否文件
        console.log(file.isFile());

        // 文件夹继续遍历
        if(file.isDirectory()){
            fs.readdir('../' + file.name, {withFileTypes: true}, (error, files) => {
                if(error){
                    console.log(error);
                }
                console.log(files);
            })
          }
    })

})


// 重命名文件
fs.rename('./lmz', './lmz1', error => {
    if(error){
        console.log(error);
    }
}) 