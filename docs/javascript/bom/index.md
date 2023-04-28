# 1.window对象

- window 对象，表示浏览器的实例。window 对象在浏览器中有两重身份，一个是ECMAScript 中的 Global 对象，另一个就是浏览器窗口的 JavaScript 接口。
- Global 作用域，当变量函数以var定义时，那么对应的变量函数将会挂在到window上。

```js
    var age=18
    var fun=()=>console.log("ldf")
    console.log(window.age) //18
    window.fun() //ldf
    let age1=19
    console.log(window.age1) //undefined
```

- 滚动页面 scrollBy移动多少 ，scrollTo 移动到指定位置
  
```js
window.scrollBy({
 left: 0,
 top: 100,
 behavior: 'smooth' //auto ,滚动方式
});
```

- 导航与打开新窗口
  - window.open()  这个方法接收 4个参数：要加载的 URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值。
  - 第一个参数 要打开的url地址
  - 第二个参数 需要哪一个窗口打开，没有的话新开一个窗口并且命名。
  - 第三个参数，窗口的参数属性，大小，工具栏目等。
  
```js
let wroxWin = window.open("http://www.wrox.com/","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
// 缩放
wroxWin.resizeTo(500, 500);
// 移动
wroxWin.moveTo(100, 100); 

wroxWin.close();

wroxWin.opener = null;  //这个连接一旦切断，就无法恢复了。 页不需要与打开它的标签页通信，因此可以在独立进程中运行。
```

- 定时器
  - setTimeout 第一个参数 回调的函数，第二个参数 告诉 JavaScript 引擎在指定的毫秒数过后把任务添加到这个队列。
  - setTimeout中的this 始终指向 window。
  - setInterval() 第二个参数也是同样的间隔多少秒将任务添加到任务队列中。通常我们建议使用setTimeOut模拟setInterval，这样可以更好的控制间隔执行。因为setInterval，的执行会造成大量并发执行。

- 系统提示
  - alert
  - confirm
  - prompt
  - 在它们显示的时候，代码会停止执行，在它们消失以后，代码才会恢复执行。

## 2.location对象

- 它既是 window 的属性，也是 document 的属性。也就是说，window.location 和 document.location 指向同一个对象。
- URLSearchParams，可以获取查询的字符串。不用手动的去实现。这是一个标准的API

```js
let qs = "?q=javascript&num=10";
let searchParams = new URLSearchParams(qs);
alert(searchParams.toString()); // " q=javascript&num=10"
searchParams.has("num"); // true
searchParams.get("num"); // 10
searchParams.set("page", "3");
alert(searchParams.toString()); // " q=javascript&num=10&page=3"
searchParams.delete("q"); 
alert(searchParams.toString()); // " num=10&page=3"
```

- location.assign(),导航到新的URL,`window.location = "http://www.wrox.com"`;`location.href = "http://www.wrox.com";` 这两种操作默认调用的都是assign
- location.reload(); // 重新加载，可能是从缓存加载 location.reload(true); // 重新加载，从服务器加载

## 3.navigator对象

- navigator 是由 Netscape Navigator 2 最早引入浏览器的，现在已经成为客户端标识浏览器的标准。
- 检测插件
  
```js
let hasPlugin = function(name) {
 name = name.toLowerCase(); for (let plugin of window.navigator.plugins){
 if (plugin.name.toLowerCase().indexOf(name) > -1){
 return true;
 }
 }
 return false;
}
// 检测 Flash
alert(hasPlugin("Flash"));
// 检测 QuickTime
alert(hasPlugin("QuickTime"));
```

- 注册处理程序.registerProtocolHandler()方法。这个方法可以把一个网站注册为处理某种特定类型信息应用程序。随着在线 RSS 阅读器和电子邮件客户端的流行，可以借助这个方法将 Web 应用程序注册为像桌面软件一样的默认应用程序。

## 4.screnn对象

- 这个对象中保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息

## 5.history对象

- URL 发生变化，则会在历史记录中生成一个新条目。history 对象表示当前窗口首次使用以来用户的导航历史记录。
- 出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退。
- go() back() forward()