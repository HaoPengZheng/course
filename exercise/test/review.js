// 判断一个obj是否是对象

// typeof 一般只能返回如下几个结果：number,boolean,string,function,object,undefined
function isString(obj){
  // console.log(typeof obj === "string");
  // console.log(obj.constructor === String)
  return typeof obj === "string";
}

// apply 和 call 使用方法

function testApplyAndCall(){
  var numbers = [1,2,3,4,5];
  console.log(Math.max.apply(this,numbers));
  console.log(Math.max.call(this,5,4,3));
}

testApplyAndCall();

// 闭包
// 闭包的缺点：容易造成内存泄漏

var count=10;   //全局作用域 标记为flag1
function add(){
    var count=0;    //函数全局作用域 标记为flag2
    return function(){
        count+=1;   //函数的内部作用域
        console.log(count);
    }
}
var s = add()
s();//输出1
s();//输出2

// 跨域
// 由于浏览器同源策略，凡是发送请求url的协议、域名、端口三者之间任意一与当前页面地址不同即为跨域。


// 垃圾回收
// 标记清除、引用计数

// sessionStorage 、localStorage 和 cookie 之间的区别
//  共同点：用于浏览器端存储的缓存数据
// 不同点：
// (1)、存储内容是否发送到服务器端：当设置了Cookie后，数据会发送到服务器端，造成一定的宽带浪费；
//         web storage,会将数据保存到本地，不会造成宽带浪费；
// (2)、数据存储大小不同：Cookie数据不能超过4K,适用于会话标识；web storage数据存储可以达到5M;
// (3)、数据存储的有效期限不同：cookie只在设置了Cookid过期时间之前一直有效，即使关闭窗口或者浏览器；
//         sessionStorage,仅在关闭浏览器之前有效；localStorage,数据存储永久有效；
// (4)、作用域不同：cookie和localStorage是在同源同窗口中都是共享的；sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
