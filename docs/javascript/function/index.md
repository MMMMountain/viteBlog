# 1.箭头函数

- 特别适合使用在回调函数中，语法简介this指向直接指向外层
- 没有prototype、arguments、super、new.target、没有constructor不能使用new关键字

```js
  const doubel = x => x * 2
  let multiply = (a, b) => return a * b; //无效写法
  let multiply = (a, b) =>  a * b; //有效
  let multiply = (a, b) => {return a * b} //有效 
```

## 2.函数名

```js
function fun(){}
console.log(fun.name)
console.log(fun.bind(null).name) //bound fun 

```

## 3.理解参数

- 可以通过形参获取
- 可以通过arguments获取，并且arguments是一直存在于函数体中。
- 箭头函数，属于纯粹的函数。中的没有arguments，prototype，constructor...
- use strict，严格模式下 改变arguments不会影响到形参,切断了对象关系。非严格模式下，属于对应关系。
  
```js
"use strict"
function fun(a,b){
  arguments[0]=3
  console.log(a,b)//1,2
  console.log(arguments[0],arguments[1])//3,2
}

fun(1,2)
```

## 4.没有重载

- js没有函数签名，在java语言中函数签名就是相同函数名，参数不一致或者参数类型不一致，那么就形成了函数签名。形成了函数签名，就可以实现函数重载。
- 在js中相同的函数名，则后面定义的函数或覆盖前面的函数。

## 5.new.target

- 是否使用了new 关键字

```js
function Fun(){
  if(new.target){
    console.log('use new keyword!')
  }else{
    console.log("don't use new keyword")
  }
}
Fun()
new Fun()
```

## 6.this指向

```js
   function fun(){
    const age="18"
    setTimeout(()=>{console.log(this.age)}) //18 this=>window
    setTimeout(function(){console.log(this.age)}) //18 this=>window
   }
   fun()
```
