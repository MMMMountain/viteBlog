# 1.代理基础

## 创建空代理对象

```js
    const target={name:"ldf"}
    const proxy=new Proxy(target,{})
    console.log(target===proxy) //false
    target.name="lbl"
    console.log(proxy.name) //lbl

    // Proxy.prototype 是 undefined
    console.log(proxy instanceof Proxy)
```

## 定义捕获器

- 使用代理的主要目的使用捕获器（trap），捕获器就是在操作代理对象的基本操作时的拦截器。trap是借鉴操作系统中的概念。在操作系统中，捕获器是程序流中的一个同步中断，可以暂停程序流，转而执行一段子例程，之后再返回原始程序流。

```js
    const obj1={name:'ldf'}
    const handler={
        get(){
            return 'handler override'
        }
    }
    const proxy=new Proxy(obj1,handler)
    console.log(obj1.name)
    console.log(proxy.name)

    console.log(obj1['name'])
    console.log(proxy['name'])

    console.log(Object.creat(obj1).name)   //ldf
    console.log(Object.creat(proxy).name)  //handler override
```

## 捕获器参数和反射 API 

- 反射的引入：所有捕获器都可以基于自己的参数重建原始操作，但并非所有捕获器行为都像 get()那么简单。因此，通过手动写码如法炮制的想法是不现实的。实际上，开发者并不需要手动重建原始行为，而是可以通过调用全局 Reflect 对象上（封装了原始行为）的同名方法来轻松重建。

```js
   //example:手动实现get代理
   const originObj={name:"ldf"}
   const originProxy=new Proxy(originObj,{
        get(origin,property,proxy){
            console.log(origin===originObj) //true
            console.log(proxy===originProxy) //true
            return origin[property]
        }
   })
   console.log(originProxy.name)  // ldf
```

以上代码案例可以基于自己的参数重建原始操作，但是我们可以Reflect更为简单的内置对象进行轻松重建，这样我们不需要手动重建原始行为。

```js
    //example:使用Reflect 进行重建
    const origin={name:"ldf"}
    const proxy1=new Proxy(origin,Reflect) //方式1
    console.log(proxy1.name)
    const proxy2=new Proxy(origin,{ //方式2
        get(){
           return Reflect.get(...arguments)
        }
    })
    console.log(proxy2.name) 
    const proxy3=new Proxy(origin,{ //方式3
        get:Reflect.get
    })
    console.log(proxy3.name)


```

## 捕获器不变式

- 捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过于反常的行为。
  
```js
const target = {};
Object.defineProperty(target, 'foo', {
 configurable: false,
 writable: false,
 value: 'bar'
});
const handler = {
 get() {
 return 'qux'; //return Reflect.get(...arguments) 前面由定义值，任何都返回qux，过于反常。
 }
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo);
// TypeError  
```

## 可撤销代理

- 通过`new Proxy(target,handler)`是永久性代理，我们可以通过`const {proxy,revoke} = Proxy.revokable(target,handler)`可以做到撤销代理。撤销后是不可逆的，执行多少次结果都是撤销。
  
```js
const target={name:"ldf"}
const {proxy,revoke}=Proxy.revocable(target,{
    get(){
        return 'xixi'
    }
})
console.log(proxy.foo) //every property is xixi
console.log(target.name)// ldf

revoke()
console.log(proxy)
console.log(proxy.foo) //TypeError

```

## 代理另一个代理

- 这样可以实现多层拦截。

```js
    const target={name:"ldf"};
    const proxy1=new Proxy(target,{
        get(){
            console.log('second')
            return Reflect.get(...arguments)
        }
    })
    const proxy2=new Proxy(proxy1,{
        get(origin,property,proxy){
            console.log('first')
            // return origin[property]
            return Reflect.get(...arguments) //往上一层去找，通过Reflect，可以快速实现，不用自己构建
        }
    })

    console.log(proxy2.name)
```

## 2.代理捕获器与反射方法

- 针对对象的操作，我们均能提供对应的捕获器。提供了中断的操作，实现拦截功能。
- 代理可以提供 13 种捕获方法和与之对应的13种Reflect反射。然而`Object.definProperty()`提供了4种配置（value,writable,configurable,enumerable）和2个方法（get，set）

## get()捕获器与Reflect.get()反射

- get捕获器与之对应的反射是Reflect.get()

```js
    const target = {foo:"bar"}
    const proxy = new Proxy(target,{
        get(origin,property,proxy_){
            console.log(origin===target) //true
            console.log(proxy_===proxy)  //true
            return Reflect.get(...arguments)
        }
    })
    proxy.foo
```

## set()捕获器与Reflect.set()反射

```js
    const target={}
    const proxy=new Proxy(target,{
        set(origin,property,value,receiver){
           console.log(receiver===proxy)
           return origin[property]=value
           Reflect.set(...arguments)
        }
        set:Reflect.set //以上均可以
    })
    proxy.name="ldf"
    console.log(proxy.name)
```

## has()捕获器与Reflect.has()反射

```js
    const obj={name:'ldf'}
    const proxy=new Proxy(obj,{
        has(target,property){
            console.log(arguments) //2个
            // return property in target
            return Reflect.has(...arguments)
        }
    })
    'name' in proxy; 
```

## defineProperty()捕获器Reflect.defineProperty()

```js
    const obj={}
    const proxy=new Proxy(obj,{
        defineProperty(){
            console.log('defineProperty')
            return Reflect.defineProperty(...arguments)
        }
    })
    Object.defineProperty(proxy, 'foo', { value: 'bar' }); 
    //proxy.name='ldf' 这种方式使用的话 则会先触发1.set()捕获器 2再触发 defineProperty()捕获其
    console.log(obj)
```

## getOwnPropertyDescriptor()和Reflect.getOwnPropertyDescriptor()

```js
    const proxy=new Proxy({foo:"bar"},{
        getOwnPropertyDescriptor(){
            return Reflect.getOwnPropertyDescriptor(...arguments)
        }
    })
    Object.getOwnPropertyDescriptor(proxy,'foo')
```

## deleteProperty()和Reflect.deleteProperty()

```js
    const proxy = new Proxy({name:"ldf"},{
        deleteProperty(){
            console.log('delete')
            Reflect.deleteProperty(...arguments)
        }
    })
    delete proxy.age 
```

## ownKeys()和Reflect.ownKeys()反射

```js
    const proxy=new Proxy({name:'ldf',age:18},{
        ownKeys(){
            console.log('ownKeys')
            return Reflect.ownKeys(...arguments)//快速的实现，不用手动构建
        }
    })
    Object.getOwnPropertyNames(proxy)
    Object.keys(proxy)
```

## getPrototypeOf()和Reflect.getPrototypeOf()反射

```js
    const proxy=new Proxy({},{
        getPrototypeOf(){
            console.log("getProtoTypeOf")
            return Reflect.getProtoTypeOf(...arguments)
        }
    })
    Object.getProtoTypeOf(proxy)
```

## setPrototypeOf()和Reflect.setPrototypeOf()反射

```js
   const proxy = new Proxy({},{
    setPrototypeOf(){
        console.log('setPrototypeOf')
        return Reflect.setPrototypeOf(...arguments)
    }
   })
   Object.setPrototypeOf(proxy,Object)
```

## isExtensible()和Reflect.isExtensible()反射

```js
    const proxy=new Proxy({},{
        isExtensible(){
            console.log('isExtensible')
            return Reflect.isExtensible(...arguments)
        }
    })
    Object.isExtensible(proxy)
```


## preventExtensions和Reflect.preventExtensions()反射

```js
    const proxy=new Proxy({},{
        preventExtensions(){
            console.log('preventExtensions')
            return Reflect.preventExtensions(...arguments)
        }
    })
    Object.preventExtensions(proxy)
```

## apply()和Reflect.apply()

- 执行函数或者`fn.call()` \ `fn.apply()`,均会被拦截。

```js
  const fn=()=>{}
  const proxy=new Proxy(fn,{
    apply(){
        console.log('apply fn')
        return Reflect.apply(...arguments)
    }
  })
  proxy()

```

## construct()和 Reflect.construct()

- new Fn()会被拦截

```js
    function Fn(){}
    const proxy=new Proxy(Fn,{
        construct(){
            console.log('construct')
            return Reflect.construct(...arguments)
        }
    })

    new proxy
```

## 3.代理模式(应用)

- 代理的应用场景是不可限量的。开发者使用它可以创建出各种编码模式，比如（但远远不限于）跟
踪属性访问、隐藏属性、阻止修改或删除属性、函数参数验证、构造函数参数验证、数据绑定，以及可
观察对象。
