# 概述

- 模式和重构之间有着一种与生俱来的关系。从某种角度来看，设计模式的目的就是为许多重构行为提供目标。
- 我们进行重构就是将一些不合理的代码设计于实现，改造成拥有符合设计模式原则的、将一种或多种设计模式与业务融合。

## 提炼函数

- 函数有着良好的命名，就是注释作用
- 函数体内包含的逻辑清晰明了
- 函数过长,拆分
- 函数添加必要注释
- 独立出函数中 职责统一的部分

## 合并重复的条件片段

```js
var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
    jump(currPage); // 跳转
  } else if (currPage >= totalPage) {
    currPage = totalPage;
    jump(currPage); // 跳转
  } else {
    jump(currPage); // 跳转
  }
};
```

改为

```js
var paging = function (currPage) {
  if (currPage <= 0) {
    currPage = 0;
  } else if (currPage >= totalPage) {
    currPage = totalPage;
  }
  jump(currPage); // 把 jump 函数独立出来
};
```

## 把条件分支语句提炼成函数

- 当条件语句中的判断过多是，我们很难读懂真正的含义。我们可以将这个判断封装乘一个函数，增加代码的可读性。

```js
var getPrice = function (price) {
  var date = new Date();
  if (date.getMonth() >= 6 && date.getMonth() <= 9) {
    // 夏天
    return price * 0.8;
  }
  return price;
};
```

改为

```js
var isSummer = function () {
  var date = new Date();
  return date.getMonth() >= 6 && date.getMonth() <= 9;
};

var getPrice = function (price) {
  if (isSummer()) {
    // 夏天
    return price * 0.8;
  }
  return price;
};
```

## 合理使用循环

- 我们只会返回符合的一个，那么我们可以用数组条件，循环数组若其中一项满足，那么可以返回结果。

```js
var createXHR = function () {
  var xhr;
  try {
    xhr = new ActiveXObject("MSXML2.XMLHttp.6.0");
  } catch (e) {
    try {
      xhr = new ActiveXObject("MSXML2.XMLHttp.3.0");
    } catch (e) {
      xhr = new ActiveXObject("MSXML2.XMLHttp");
    }
  }
  return xhr;
};
var xhr = createXHR();
```

改为

```js
var createXHR = function () {
  var versions = [
    "MSXML2.XMLHttp.6.0ddd",
    "MSXML2.XMLHttp.3.0",
    "MSXML2.XMLHttp",
  ];
  for (var i = 0, version; (version = versions[i++]); ) {
    try {
      return new ActiveXObject(version);
    } catch (e) {}
  }
};
var xhr = createXHR();
```

## 提前让函数退出代替嵌套条件分支

- 嵌套的条件分支语句绝对是代码维护者的噩梦，对于阅读代码的人来说，嵌套的 if、else 语句相比平铺的 if、else，在阅读和理解上更加困难。
- 错误的条件先行，提前退出函数。这样可以平铺我们的 if 条件，代码可读性能高。

```js
var del = function (obj) {
  var ret;
  if (!obj.isReadOnly) {
    // 不为只读的才能被删除
    if (obj.isFolder) {
      // 如果是文件夹
      ret = deleteFolder(obj);
    } else if (obj.isFile) {
      // 如果是文件
      ret = deleteFile(obj);
    }
  }
  return ret;
};
```

改为

```js
var del = function (obj) {
  if (obj.isReadOnly) {
    // 反转 if 表达式
    return;
  }
  if (obj.isFolder) {
    return deleteFolder(obj);
  }
  if (obj.isFile) {
    return deleteFile(obj);
  }
};
```

## 传递对象参数代替过长的参数列表

- 一个函数有可能接收多个参数，而参数的数量越多，函数就越难理解和使用。使用该函数的人首先得搞明白全部参数的含义，在使用的时候，还要小心翼翼，以免少传了某个参数或者把两个参数搞反了位置。
- **解决：**使用对象的方式代替孤立参数的方式传参。

## 尽量减少参数数量

- 优化参入的参数，我们传入 2 的参数就能解决问题是那么我们就不要大于传入 2 个参数。

## 少用三目运算符

- 一层的三目运算是可以起到简化代码，我们鼓励使用。两层以上的三目就会增加我们队代码的可读性了，避免这样去使用。

## 合理使用链式调用

- 使用链式调用的方式并不会造成太多阅读上的困难，也确实能省下一些字符和中间变量，但节省下来的字符数量同样是微不足道的。
- 链式调用带来的坏处就是在调试的时候非常不方便，如果我们知道一条链中有错误出现，必须得先把这条链拆开才能加上一些调试 log 或者增加断点，这样才能定位错误出现的地方。

## 分解大型类

- 将一个大型的内，拆分成不同的小类。这些小类再去组成这一个大类，各类负责自己的职责。
- 例如坦克大战，可以拆分成 初始化类、画坦克的类、攻击类、移动类、敌人类、以及基础的攻击抽象类、基础的坦克类

```js
var Spirit = function (name) {
  this.name = name;
};
Spirit.prototype.attack = function (type) {
  // 攻击
  if (type === "waveBoxing") {
    console.log(this.name + ": 使用波动拳");
  } else if (type === "whirlKick") {
    console.log(this.name + ": 使用旋风腿");
  }
};
var spirit = new Spirit("RYU");
spirit.attack("waveBoxing"); // 输出：RYU: 使用波动拳
spirit.attack("whirlKick"); // 输出：RYU: 使用旋风腿
```

改为

```js
var Attack = function (spirit) {
  this.spirit = spirit;
};
Attack.prototype.start = function (type) {
  return this.list[type].call(this);
};
Attack.prototype.list = {
  waveBoxing: function () {
    console.log(this.spirit.name + ": 使用波动拳");
  },
  whirlKick: function () {
    console.log(this.spirit.name + ": 使用旋风腿");
  },
};

var Spirit = function (name) {
  this.name = name;
  this.attackObj = new Attack(this); //挂在攻击的小类
};
Spirit.prototype.attack = function (type) {
  // 攻击
  this.attackObj.start(type);
};
var spirit = new Spirit("RYU");
spirit.attack("waveBoxing"); // 输出：RYU: 使用波动拳
spirit.attack("whirlKick"); // 输出：RYU: 使用旋风腿
```

## 用 return 退出多重循环

- 把循环后面的代码放到 return 后面，如果代码比较多，就应该把它们提炼成一个单独的函数。

```js
var print = function (i) {
  console.log(i);
};
var func = function () {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i * j > 30) {
        return print(i);
      }
    }
  }
};
func();
```
