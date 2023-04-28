# 事件流

- 事件冒泡：IE 将支持事件冒泡流，而 Netscape Communicator 将支持事件捕获流。现代浏览器中的事件会一直冒泡到 window 对象。
- 事件捕获：Netscape Communicator 团队提出了另一种名为事件捕获的事件流。事件捕获的意思是最不具体的节点应该最先收到事件，而最具体的节点应该最后收到事件。事件捕获实际上是为了在事件到达最终目标前拦截事件。
- 通常建议使用事件冒泡，特殊情况下可以使用事件捕获。
- 事件流分为 3 个阶段：事件捕获、到达目标和事件冒泡。通常我们忽视了事件捕获。
  
## 事件处理程序

- 事件意味着用户或浏览器执行的某种动作。比如，单击（click）、加载（load）、鼠标悬停（mouseover）。为响应事件而调用的函数被称为事件处理程序（或事件监听器）。
- 调用 addEventListener()和 removeEventListener()时传入的是同一个函数。

## 事件对象

- event.stopPropagation();
- event.preventDefault();
- event.eventPhase //1：捕获 //2:到达目标 //冒泡
- this 对象始终等于 event.currentTarget event.target  

## 事件类型

- 用户界面事件（UIEvent）：涉及与 BOM 交互的通用浏览器事件。页面上、元素上的钩子事件 load  unload abort  error select resize scroll
  - 与 load 事件相对的是 unload 事件，unload 事件会在文档卸载完成后触发。unload 事件一般是在从一个页面导航到另一个页面时触发，最常用于清理引用，以避免内存泄漏。
  - resize，scroll 事件也会随着文档滚动而重复触发，因此最好保持事件处理程序的代码尽可能简单。
- 焦点事件（FocusEvent）：在元素获得和失去焦点时触发。
  - (1) focuscout 在失去焦点的元素上触发。
  - (2) focusin 在获得焦点的元素上触发。
  - (3) blur 在失去焦点的元素上触发。
  - (4) focus 在获得焦点的元素上触发。
- 鼠标事件（MouseEvent）：使用鼠标在页面上执行某些操作时触发。
  - (1) mousedown(2) mouseup(3) click(4) mousedown(5) mouseup(6) click(7) dblclick
  - 客户端坐标 e.clientX e.clientY
  - 页面坐标 在页面没有滚动时，pageX 和 pageY 与 clientX 和 clientY 的值相同。
  - 屏幕坐标 screenX 和 screenY
- 滚轮事件（WheelEvent）：使用鼠标滚轮（或类似设备）时触发。
- 输入事件（InputEvent）：向文档中输入文本时触发。
- 键盘事件（KeyboardEvent）：使用键盘在页面上执行某些操作时触发。
- 合成事件（CompositionEvent）：在使用某种 IME（Input Method Editor，输入法编辑器）输入字符时触发。

## 内存与性能

- 事件委托:“过多事件处理程序”的解决方案是使用事件委托。事件委托利用事件冒泡，可以只使用一个事件处理程序来管理一种类型的事件。
  
```js
let list = document.getElementById("myLinks");
list.addEventListener("click", (event) => {
 let target = event.target;
 switch(target.id) {
 case "doSomething":
 document.title = "I changed the document's title";
 break;
 case "goSomewhere":
 location.href = "http:// www.wrox.com";
 break;
 case "sayHi":
 console.log("hi");
 break;
 }
}); 
```

- 删除事件处理程序:把事件处理程序指定给元素后，在浏览器代码和负责页面交互的 JavaScript 代码之间就建立了联系。这种联系建立得越多，页面性能就越差。除了通过事件委托来限制这种连接之外，还应该及时删除不用的事件处理程序。很多 Web 应用性能不佳都是由于无用的事件处理程序长驻内存导致的。

## 模拟事件

- 可以通过 JavaScript 在任何时候触发任意事件，而这些事件会被当成浏览器创建的事件。
  