# Selectors API

- querySelector()
- querySelectorAll();这个方法返回的是一个 NodeList 的静态实例。
- matches()方法（在规范草案中称为 matchesSelector()）接收一个 CSS 选择符参数，如果元素匹配则该选择符返回 true，否则返回 false。
- getElementsByClassName()
- classList 元素的classList 可以用类数组方式进行管理
- scrollIntoView()方法存在于所有 HTML 元素上，可以滚动浏览器窗口或容器元素以便包含元素进入视口。
- getElementsByClassName(),因为返回值是 NodeList
  
```js
// 取得所有类名中包含"username"和"current"元素
// 这两个类名的顺序无关紧要
let allCurrentUsernames = document.getElementsByClassName("username current");
// 取得 ID 为"myDiv"的元素子树中所有包含"selected"类的元素
let selected = document.getElementById("myDiv").getElementsByClassName("selected");
```

-classList 属性要操作类名，可以通过 className 属性实现添加、删除和替换。 add() contains() remove() toggle() 有删除没有添加

## 元素遍历

- Element Traversal API 为 DOM 元素添加了 5 个属性，只返回element元素
  - childElementCount，返回子元素数量（不包含文本节点和注释
  - firstElementChild，指向第一个 Element 类型的子元素（Element 版 firstChild）；
  - lastElementChild，指向最后一个 Element 类型的子元素（Element 版 lastChild）；
  - previousElementSibling ，指向前一个 Element 类型的同胞元素（ Element 版previousSibling）；
  - nextElementSibling，指向后一个 Element 类型的同胞元素（Element 版 nextSibling）。

## HTML5

- 焦点管理
  - document.activeElement，始终包含当前拥有焦点的 DOM 元素。
  - document.hasFocus()方法，该方法返回布尔值，表示文档是否拥有焦点
- document.readyState 查看当前文档的状态。 属性有两个可能的值 loading，表示文档正在加载；complete，表示文档加载完成。
- document.characterSet 获取字符集属性
- div.dataset.appId; 获取自定义属性的值。另外，单页应用程序框架也非常多地使用了自定义数据属性。
- 插入标记
  - innerHTML 属性时，会返回元素所有后代的 HTML 字符串，包括元素、注释和文本节点。
  - innerText 获取/设置，element元素的文本属性。
  - outerHTML，类似于innerHTML,只是这里会包含自己本身。
- scrollIntoView()
  - 滚动到指定的元素。xxx.scrollIntoView()
  
## 专有扩展

- children 属性只包含元素的 Element 类型的子节点。
- contains()方法  用于确定。DOM 编程中经常需要确定一个元素是不是另一个元素的后代。
