# 节点层级

- document 节点表示每个文档的根节点。在这里，根节点的唯一子节点是`<html>`元素，我们称之为文档元素（documentElement）。
- 层级关系：docuument->document.documentElement->head（script、style、link）、body（各种元素）
- 节点：元素节点、属性节点、文档类型节点、注释节点....。DOM 中总共有 12 种节点类型，这些类型都继承一种基本类型。
  - **Node.ELEMENT_NODE（1）** **Node.ATTRIBUTE_NODE（2）** **Node.TEXT_NODE（3）** Node.CDATA_SECTION_NODE（4） Node.ENTITY_REFERENCE_NODE（5） Node.ENTITY_NODE（6） Node.PROCESSING_INSTRUCTION_NODE（7）Node.COMMENT_NODE（8） Node.DOCUMENT_NODE（9）Node.DOCUMENT_TYPE_NODE（10） Node.DOCUMENT_FRAGMENT_NODE（11）Node.NOTATION_NODE（12）
  - 开发者最常用到的是元素节点和文本节点。
- 节点关系
  - 每个节点都有一个 parentNode 属性，指向其 DOM 树中的父元素。
  - 每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。childNodes是一个类数组
  - previousSibling 和 nextSibling 可以在这个列表的节点间导航。这个列表中第一个节点的 previousSibling 属性是 null，最后一个节点的nextSibling 属性也是 null。类似与链表指向

```js
//example:访问childnodes 方式，通常我们使用下标的方式
let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length; 
```

- 操纵节点
  - appendChild，尾添加。 insertBefore头部添加。
  - replaceChild()方法接收两个参数：要插入的节点和要替换的节点。
  
  ```js
  // 替换第一个子节点
  let returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
  // 替换最后一个子节点
  returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
  ```

  - removeChild()方法。这个方法接收一个参数，即要移除的节点。
  - 上面介绍的 4 个方法都用于操纵某个节点的子元素，也就是说使用它们之前必须先取得父节点（使用前面介绍的 parentNode 属性）。
  - cloneNode()
  - normalize()。这个方法唯一的任务就是处理文档子树中的文本节点。可以将两个相邻的文本节点规范化后，只存在一个文本节点。
  
- Document 类型
  - document.documentElement;
  - document.body;
  - document.doctype;
  - document.title;
  - document.URL;
  - document.domain;
  - document.referrer;

- Element 类型 1
  - tagName nodeName 都是获取 元素的名字 都是以大写的方式返回 例如：DIV P IMG UL LI 等等
  - HTMLElement直接继承 Element 并增加了一些属性。HTML 元素及其对应的类型 见js4-440页。
  - 取得属性 div.getAttribute("id")
    - getAttribute()的属性名与它们实际的属性名是一样的，因此这里要传"class"  
    - 属性名不区分大小写，因此"ID"和"id"被认为是同一个属性。
  - 根据 HTML5 规范的要求，自定义属性名应该前缀 data-以方便验证。
  - setAttribute()，这个方法接收两个参数：要设置的属性名和属性的值。如果属性已经存在，则 setAttribute()会以指定的值替换原来的值；如果属性不存在，则 setAttribute()会以指定的值创建该属性。
    - 设置的属性名会规范为小写形式，因此"ID"会变成"id"。
    - 内置属性可以直接给 DOM 对象的属性赋值也可以设置元素属性的值。 `div.id = "someOtherId";div.align = "left";`
  - removeAttribute() 移除属性
  - 创建元素
    - document.createElement()方法创建新元素。后使用 appendChild() 、insertBefore()、replaceChild() 添加元素。

- Text 类型 3
- Comment 类型 8
- CDATASection 类型
  - CDATASection 类型表示 XML 中特有的 CDATA 区块。
- DocumentType 类型 10
- DocumentFragment 类型 11
- Attr 类型

## DOM 编程

- 动态脚本
- 动态样式
- 操作表格
- 使用 NodeList

## MutationObserver 接口

- 接口提供了监视对 DOM 树所做更改的能力。
