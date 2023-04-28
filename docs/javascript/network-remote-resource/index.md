# XMLHttpRequest 对象

- Ajax（Asynchronous JavaScript+XML，即异步 JavaScript 加 XML）的技术。解决了这个技术怎样改变自 Web 诞生以来就一直延续的传统单击等待的模式。
- 0：未初始化（Uninitialized）。尚未调用 open()方法。1：已打开（Open）。已调用 open()方法，尚未调用 send()方法。 2：已发送（Sent）。已调用 send()方法，尚未收到响应。3：接收中（Receiving）。已经收到部分响应。4：完成（Complete）。已经收到所有响应，可以使用了。

```js
const xhr = new XMLHttpRequest()
xhr.open('get','http://XXX.XXX',true) //创建
xhr.onreadystatechange = function() { //监听
    xhr.readyState //0,1,2,3,4
}
xhr.send() //发送
```

- xhr.setRequestHeader("MyHeader", "MyValue"); 可以设置头部信息
- FormData 类型。对表单数据进行序列化

  ```js
    let data = new FormData();
    data.append("name", "Nicholas"); 
    xhr.send(new FormData(form)); //发送序列化的表单   
  ```

- xhr.timeout = 1000; // 设置 1 秒超时
- xhr.overrideMimeType("text/xml");  设置返回的类型，如果服务器返回的是xml，而我们没有设置（默认是text/plain类型），那么返回结果是null


## 进度事件
-progress 事件:为了保证正确执行，必须在调用 open()之前添加 onprogress 事件处理程序。在前面的例子中，每次触发 progress 事件都会更新 HTML 元素中的信息。假设响应有 Content-Length 头部，就可以利用这些信息计算出已经收到响应的百分比。

## 跨源资源共享

## 替代性跨源技术

- 图片探测 图片探测频繁用于跟踪用户在页面上的点击操作或动态显示广告。
- JSONP: 利用script标签和自身的回调接收response。
  

## Fetch API

- Fetch API 能够执行 XMLHttpRequest 对象的所有任务，但更容易使用，接口也更现代化，能够在Web 工作线程等现代 Web 工具中使用。XMLHttpRequest 可以选择异步，而 Fetch API 则必须是异步。
- 实际开发中，应该尽可能使用 fetch()。
- 类似于axios的使用。
- Beacon API。 离开时发送的api。
  
```js
    navigator.sendBeacon('https://example.com/analytics-reporting-url', '{foo: "bar"}'); 
```

## Web Socket

- Web Socket（套接字）的目标是通过一个长时连接实现与服务器全双工、双向的通信。
- ws://和 wss://。前者是不安全的连接，后者是安全连接。
- 属于非同源策略
-  WebSocket.OPENING（0）：连接正在建立。
 WebSocket.OPEN（1）：连接已经建立。
 WebSocket.CLOSING（2）：连接正在关闭。
 WebSocket.CLOSE（3）：连接已经关闭。
- onmessage：接收信息
- onclose 关闭

## 安全

- 要求通过 SSL 访问能够被 Ajax 访问的资源。
- 要求每个请求都发送一个按约定算法计算好的令牌（token）。
- 要求 POST 而非 GET 请求（很容易修改请求方法）。
- 使用来源 URL 验证来源（来源 URL 很容易伪造）。
- 基于 cookie 验证（同样很容易伪造）。
