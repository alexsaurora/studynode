const dns = require('dns');
dns.resolve('baidu.com',(err,res) =>{
  if (err) {
    console.log('解析失败');
  } else {
    console.log(res);
  }
});
