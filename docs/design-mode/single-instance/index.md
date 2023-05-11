# 单例模式

- 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
- 单例模式的使用点例如：登录浮框、全局唯一缓存、window对象、线程池。

## 实现单例模式

- 实现原理：用一个变量标志是否为某一个类创建对象。存在则直接返回对象。
  
```js
function SingleInstance(name){
    this.name=name
    this.instance1=null
}
// 挂载到每一个实例对象上
SingleInstance.getInstance=(function(){
    let instance=null
    return function (name){
        if(instance){
            return instance
        }
       return instance = new SingleInstance(name)
    }
})()

const ldf = SingleInstance.getInstance('ldf')
const lbl = SingleInstance.getInstance('lbl')
console.log(ldf===lbl)

```

## 透明单例模式

- 我们可以直接只用new的方式进行构建。

```js
const CreateDiv=(function(){
    let instance=null;
    function CreateDiv(html){
        if(instance){
            return instance
        }
        this.html=html
        this.init()
        instance=this 
    }
    CreateDiv.prototype.init=function(){
        const div=document.createElement('div')
        div.innerHtml=this.html
        document.body.append(div)
    }
    return CreateDiv
})()

var a = new CreateDiv( 'sven1' );
var b = new CreateDiv( 'sven2' );
console.log(a===b); // true 
```

## 用代理实现单例模式

- 以上对象存在控制是否只有一个变量和创建元素，我们将这两个行为进行分离。这样符合单一职责的设计

```js
function proxySingle(){
    //这里其实也是一个缓存
    let instance=null
    return function(html,CreateFn){
        if(instance){
            return instance
        }
        return instance =new CreateFn(html)
    }
}

function CreateDiv(html){
      this.html=html
      this.init()   
}
CreateDiv.prototype.init=function(){
    const div = document.createElement('div')
    div.innerHTML=this.html
    document.body.append(div)
}

const Cdiv= proxySingle()
const c1= new Cdiv('ldf',CreateDiv)
const c2= new Cdiv('lbl',CreateDiv)
console.log(c1===c2) //true

const Cdiv1= proxySingle()
const c3= new Cdiv1('zy',CreateDiv)
console.log(c1===c3) //false

```

## javascript 中的单例模式

- 通常我们采取挂载唯一值的方式去解决
  
```js
const user={
    name:"ldf",
    age:18
}
var user1 = (function(){
 var __name = user.name,
 __age = user.age;
 return {
 getUserInfo: function(){
 return __name + '-' + __age;
 }
 } 
})(); 
user1.getUserInfo()
```

## 惰性单例

- 惰性单例指的是在需要的时候才创建对象实例。惰性单例是单例模式的重点，这种技术在实际开发中非常有用，有用的程度可能超出了我们的想象。

## 通用的惰性单例