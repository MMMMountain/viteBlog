# 闭包

- 通常我们执行完一个函数时，作用域变量都会释放销毁。然而闭包是函数体内有一个函数引用了变量，那么这个变量不会被释放。这个变量会一只存在，保存数据。这样我们可以使用这个变量保存一些共享数据。例如缓存，防抖节流等。
- 使用完成后我们要释放这个函数，将函数置为null，释放内存。

## 高阶函数

- 函数可以作为参数被传递；
- 函数可以作为返回值输出。
- AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后，再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。
- 面向切面编程对于js来说更为简单，我们首先before和after即可，这是js语言天生的优势。
  