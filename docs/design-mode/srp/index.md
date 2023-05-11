# 概述

- 单一职责：再js中通常是针对对象或者方法的，一个方法的责任应该是单一的，如果一个方法的责任是多样的，那么后面改动的可能性就越大。通常我们的方法可以是聚合方法，聚合方法可以由多许单一职责的方法构成。单一职责的方法，就可以形成高内聚的形态。如果后面业务改动，那么我们也只需要去改动聚合的方法。这样我们的程序的健壮性就强，运行也就越稳定。
- 一个方法不稳定，修改代码总是一件危险的事情，特别是当两个职责耦合在一起的时候，一个职责发生变化可能会影响到其他职责的实现，造成意想不到的破坏，这种耦合性得到的是低内聚和脆弱的设计。
- SRP 原则体现为：一个对象（方法）只做一件事情。

## 设计模式中的 SRP 原则

- 案例1
  - 图片预加载：加载一张本地的loading图片给用户一个友好提示，同时我们请求真实的图片地址，当真实地址请求好了后我们加载真实地址。
  - 使用了一个前置代理，就是预加载图片。在100%确认网络没有问题时，我们可以移除这个前置代理。直接加载图片。
  - 单一职责：拆分了代理函数和创建并加载图片函数。
  
```js
    //创建图片职责
    const myImage=(function myImage(){
        const img=document.createElement('img')
        document.body.appendChild(img)
         return {
            setSrc:function (src){
            img.src=src
        }
         }
         
    })() 

    //前置代理虚拟图片职责
    const proxyImage=(function (){
        const img=new Image；
        img.onload=function(){
            myImage(src)
        }
        return {
            setSrc:function (src){
                myImage.setSrc('localImgPath')
                img.src=src
            }} 
    })()   
    
    // 直接创建
    myImage.setSrc('xxxxx')
    //代理创建
    proxyImage.setSrc('xxxx')
```

- 案例2 根据ajax数据生产元素
  - 渲染数据：开放-封闭（涉及参数的传递） 单一职责（封装专一的函数）

```js
    var each = function( obj, callback ) {
    var value,
    i = 0,
    length = obj.length,
    isArray = isArraylike( obj ); // isArraylike 函数未实现，可以翻阅 jQuery 源代码
    if ( isArray ) { // 迭代类数组
    for ( ; i < length; i++ ) {
    callback.call( obj[ i ], i, obj[ i ] );
    }
    } else {
    for ( i in obj ) { // 迭代 object 对象
    value = callback.call( obj[ i ], i, obj[ i ] );
    }
    }
    return obj;
    };
    var appendDiv = function( data ){
    //p1:是渲染的诗句 p2:是渲染的数据的方法
    //我们我这入p2的方式传入比较好这样我们的each函数就会形成一个封闭，开发的是渲染方式-封闭的是each
    each( data, function( i, n ){
    var div = document.createElement( 'div' );
    div.innerHTML = n;
    document.body.appendChild( div );
    });
    };
    appendDiv([ 1, 2, 3, 4, 5, 6 ] );
    appendDiv({a:1,b:2,c:3,d:4} );  

    // 创造函数的方法
    function createFN(data,i){}

    // 根据数据类型渲染函数
    function renderFN(data,callBack){}

    //获取数据后直接渲染
    function handlerRender(data,createFN){
        renderFN(data,createFN)
    }

    handlerRender(data,createFN)
```

- 案例3
  - 单例模式：拆分为-单例函数 、业务代码函数

```js
   function getSingle(fn){
        var result
        return function (){
          return  result || (result=fn.apply(fn,arguments))
        }
    }

    function createElement(){
        const div=document.createElement('div')
        div.innerHTML=`login`
        div.style.color='red'
        document.body.appendChild(div)
        return div
    }

   const render= getSingle(createElement)
   const l1=render()
   const l2=render() 
   console.log(l1===l2) 
```

## 何时应该分离职责

- 一方面，如果随着需求的变化，有两个职责总是同时变化，那就不必分离他们。
- 另一方面，职责的变化轴线仅当它们确定会发生变化时才具有意义，即使两个职责已经被耦合在一起，但它们还没有发生改变的征兆，那么也许没有必要主动分离它们，在代码需要重构的时候再进行分离也不迟。

## 违反 SRP 原则

- 在方便性与稳定性之间要有一些取舍。具体是选择方便性还是稳定性，并没有标准答案，而是要取决于具体的应用环境。

## SRP 原则的优缺点

- 优点：拆分成更小的方法，更加的细粒度，有利于代码的复用，有利于我们做单元测试，减少改动代码后的影响。开放（可以修改摸一个封装的方法），封闭（我们的执行调用没有改变）
- 缺点：难以发现并且拆分、会增加编写代码的复杂度、增大了这些对象之间相互联系的难度。
