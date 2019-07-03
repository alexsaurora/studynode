const fs = require('fs');

fs.readFile('1.txt', (err,data)=>{
  if (err) {
    console.log("读取有错误");
  } else {
    console.log(data.toString());
  }

});  //异步

fs.writeFile('3.txt','alexsurora write with the file system',err=>{
  if (err) {
    console.log(err);
  }else{
    console.log("写入成功");
  }
})
