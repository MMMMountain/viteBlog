# 能力检测（是否存在某一些api）

- 任何时候，只要有更普适的方案可选，都应该毫不犹豫地选择。首先要设计最常用的方案，然后再考虑为特定的浏览器进行补救。
- 测试浏览器是否支持某种特性。这种方式不要求事先知道特定浏览器的信息，只需检测自己关心的能力是否存在即可。

```js
//example:检测是否有getElement 能力
function getElement(id) {
 if (document.getElementById) {
 return document.getElementById(id);
 } else if (document.all) {
 return document.all[id];
 } else {
 throw new Error("No way to retrieve element!");
 }
} 
```

## 用户代理检测（检测当前的浏览器版本）

## 软件与硬件检测  