const assert = require('assert');

function sum(a, b) {
  assert(arguments.length == 2, '必须传两个参数');
  assert(typeof a == 'number', '第一个参数必须为数字');
  assert(typeof b == 'number', '第二个参数必须为数字');
  return a+b;
}
console.log(sum(12));
