const path = require('path');

let str = '/var/www/aaa/1.png';

//dirname  路径名字
//basename 文件名字
//extname 扩展名

console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));
