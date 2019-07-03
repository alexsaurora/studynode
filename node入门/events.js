const Event = require('events').EventEmitter;
let ev = new Event();

//1，监听事件（接收）
ev.on('msg',function (a,b,c) {
  console.log('收到了msg事件：' , a , b ,c );
});


//2，派发事件（发送）
ev.emit('msg',12,5,13);

//events和函数调用区别在于，它可以解耦（无视函数名字）
