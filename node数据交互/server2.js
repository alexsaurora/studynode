const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res) =>{
  fs.readFile(`www${req.url}`,(err,data)=>{
    if (err) {
      res.writeHeader(404);
      res.write('source not found');
    } else {
      res.write(data);
    }
    res.end();
  })
});
server.listen(8080);

//res 三种方法
// res.write();
// res.writeHeader();
// res.setHeader();
