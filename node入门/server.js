const http = require('http');
let server = http.createServer((req,res)=>{
  switch (req.url) {
    case '/aaa':
      res.write('aaa');
      break;
    case '/bbb':
      res.write('bbb');
      break;
    case '/1.html':
      res.write('<html><body><h>hahhahh</h></body></html>');
      break;
  }
  res.end();
})
server.listen(8080);
