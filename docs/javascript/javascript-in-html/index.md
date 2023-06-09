# script元素

- `<script src="http://www.somewhere.com/afile.js"></script>`
浏览器在解析这个资源时，会向 src 属性指定的路径发送一个 GET 请求，以取得相应资源。
- 不管包含的是什么代码，浏览器都会按照`<script>`在页面中出现的顺序依次解释它们，前提是它们没有使用 defer 和 async 属性。第二个`<script>`元素的代码必须在第一个`<script>`元素的代码解释完毕才能开始解释，第三个则必须等第二个解释完，以此类推
- 这种做法的主要目的是把外部的 CSS 和 JavaScript 文件都集中放到一起。不过，把所有 JavaScript文件都放在`<head>`里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面（页面在浏览器解析到`<body>`的起始标签时开始渲染）。对于需要很多 JavaScript 的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在`<body>`元素中的页面内容后面。

## 推迟执行脚本

- defer 相当于告诉浏览器立即下载，但延迟执行。不会阻塞页面加载。
- defer 属性只对外部脚本文件才有效
- defer 并且按顺序执行。

## 异步执行脚本

- async 只适用于外部脚本
- async 告诉浏览器立即开始下载。不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行。
- 给脚本添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。

## `<noscript>`元素

- 浏览器不支持脚本； 浏览器对脚本的支持被关闭。noscript的内容就会显示出来。
- 如果浏览器支持脚本，则用户永远不会看到它。
