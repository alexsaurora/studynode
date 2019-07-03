const fs = require('fs');

//覆盖写入
// fs.readFile('1,txt',(err,data) =>{
//   fs.writeFile('2.txt',data,()=>{});
// })

//写入图片
// fs.readFile('ofo.png',(err,data) =>{
//   fs.writeFile('ofo2.png',data,()=>{});
// });

//追加写入
fs.readFile('3.txt',(err,data) =>{
  fs.appendFile('2.txt',data,()=>{});
})
