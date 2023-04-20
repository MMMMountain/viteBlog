# 理解迭代器

## 迭代器概念

- 按照顺序反复执行一段代码，通常会有`终止条件`。*例如：迭代开发，按照开发周期反复迭代一下项目。* 😉

## 内置迭代器

- 查看内部是否存在迭代器.只有number和object中不存在迭代器，其余内部均实现了迭代器。
  
```js
   //example:查看内部是否实现了迭代器
   const num = 1;
   console.log(num[Sysmbol.iterator]) //undefined
   const obj = {};
   console.log(obj[Sysmbol.iterator]) //undefined
```

## 使用迭代器

- 通过`const iterator = arr[Symbol.iterator]()`获取到迭代器对象，`iterator.next()`返回一个iteratorResult对象，如：`{done:true\false,value:item}`。
  
```js
   //example:迭代器的基础使用
   const arr = [1,2,3];
   const iterator=arr[Symbol.iterator]();//返回一个迭代器对象
   iterator.next(); //{done:false,value:1}
   arr.splice(1,0,"jay");
   iterator.next(); //{done;false,value:'jay'}
   iterator.next(); //{done:false,value:2}
   iterator.next(); //{done:false,value:3}
   iterator.next(); //{done:true,value:undefined} 
```

## 自定义一个迭代器

- `for of`默认回调用迭代器中的`[Sysbol.iterator]()`，然后执行`next()`,根据此特点我们只需要在`next()`外层定义一个`count`闭包变量。实现一个迭代器可以反复调用。

```js
  //example：手写实现一个迭代器
  class Counter{
    constructor(val){
      this.limit=val
      this.count=1
    }
    [Symbol.iterator](){
      let count=this.count,
          limit=this.limit;
      return{
        next(){ 
          if(count<=limit){
            return {done:false,value:count++};
          }else{
            return {done:true,value:undefined};
        }
        }
      } 
    }
  }
  const i1=new Counter(3)
  for(let i of i1){
    console.log(i) //1,2,3
  }
  for(let i of i1){
    console.log(i) //1,2,3
  }
```

## 提前终止迭代器

- for-of 循环通过 break、continue、return 或 throw 提前退出；
- 解构操作并未消费所有值。
- 数组没有终止器，可继续迭代剩下的项。
- 要知道某个迭代器是否可关闭，可以测试这个迭代器实例的 return 属性是不是函数对象。
  
```js
  //example:数组终止后，可继续迭代
  const arr=[1,2,3];
  const iterator=arr[Symbol.iterator]();
  for(let i of iterator){
    console.log(i)//1,2
    if(i>1){
      break;
    }
  }
  for(let i of iterator){
    console.log(i)//3
  }
```

## 生成器

- 生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义
函数的地方，就可以定义生成器。
- 箭头函数不能用来定义生成器函数。

```js
   //example 定义生产器
   function* generatorFn() {}
   const generatorFn = function* () {}
   class Foo{
    *generator() {}
   }
   class Foo{
    static *generator() {}
   }

   //error
   const generator=*() => {}\
```

- 生产器的基本使用，执行生产器函数，会返回一个迭代器对象。用法同迭代器一致。可以`next()` `for of` 去执行迭代器。
- yield 关键字必须直接位于生成器函数定义中，出现在嵌套的非生成器函数中会抛出语法错误。
