const crypto = require('crypto');

function md5(str){
  let obj = crypto.createHash('md5');
  obj.update(str);
  return obj.digest('hex');
}
//双层md5加密，还可能被查到，可以加入混淆字符串保证难以破解
console.log(md5(md5('123456'))+'as3z5x');
