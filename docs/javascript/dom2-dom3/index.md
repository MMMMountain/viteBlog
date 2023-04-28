# DOM 的演进

## 样式

- 元素尺寸
  - 偏移量尺寸
    - offsetHeight
    - offsetWidth，元素在水平方向上占用的像素尺寸，包括它的宽度、垂直滚动条宽度（如果可见）和左、右边框的宽度。
    - offsetLeft，元素左边框外侧距离包含元素左边框内侧的像素数。相对于父级元素的左距离
    - offsetTop，元素上边框外侧距离包含元素上边框内侧的像素数。相对于父级元素的顶部距离
  - 客户端尺寸
    - 客户端尺寸只有两个相关属性：clientWidth 和 clientHeight。其中，clientWidth 是内容区宽度加左、右内边距宽度，clientHeight 是内容区高度加上、下内边距高度。
  - 滚动尺寸
    - scrollHeight，没有滚动条出现时，元素内容的总高度。
    - scrollLeft，内容区左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置。
    - scrollTop，内容区顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置。
    - scrollWidth，没有滚动条出现时，元素内容的总宽度。
  - getBoundingClientRect
    - 返回一个 DOMRect 对象，包含6 个属性：left、top、right、bottom、height 和 width。这些属性给出了元素在页面中相对于视口的位置。

## 遍历

## 范围

- 为了支持对页面更细致的控制，DOM2 Traversal and Range 模块定义了范围接口。范围可用于在文档中选择内容，而不用考虑节点之间的界限。（选择在后台发生，用户是看不到的。）范围在常规 DOM
操作的粒度不够时可以发挥作用。
