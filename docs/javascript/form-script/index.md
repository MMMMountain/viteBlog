# 表单基础

- `<form>` 在 JavaScript 中则以 HTMLFormElement 类型表示。HTMLFormElement 类型继承自 HTMLElement 类型
  - reset()：把表单字段重置为各自的默认值。
  - submit()：提交表单。
  - length：表单中控件的数量。
  - elements：表单中所有控件的 HTMLCollection。
  - 设置了 autofocus，就不再调用 focus()
  - change:在`<input>`和`<textarea>`元素的 value 发生变化且失去焦点时触发，或者在`<select>`元素中选中项发生变化时触发。

## 文本框编程

- 处理剪贴板
  - beforecopy：复制操作发生前触发。
  - copy：复制操作发生时触发
  - beforecut：剪切操作发生前触发。
  - cut：剪切操作发生时触发。
  - beforepaste：粘贴操作发生前触发。
  - paste：粘贴操作发生时触发。
  
## 选择框编程

## 表单序列化

## 富文本编辑
