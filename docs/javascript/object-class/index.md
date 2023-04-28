# 理解对象

- 对象是一组无序的散列表，由键可以获取对应的值。值可以是数据或者函数。
- 数据属性
  - 对象数据的属性包含4类 `[[Configurable]]`默认值为false，表示是否能删除修改以及以及是否可以把它改为访问器属性、`[[Enumerable]]`默认为false,表示是否能`for in`、`[[Writable]]`默认值为false，表示是否可修改、`[[Value]]`默认值为undefined，表示属性的值。Object.defineProperty()时4类属性均为false和undefined。字面量的方式定义那么对象数据的属性为true和undefined。
  
```js
    const obj={};
    Object.defineProperty(obj,'name',{
        value:'ldf',
        writable:false,//不可修改
        enumerable:false,//不可for in
        configurable:false//不可删除
    })
    console.log(obj.name)
    //value（增） configurable（删） enumerable（查） writable（改）
```

- 访问器属性
  - `[getter]`函数对应`get(){}`函数，`[setter]`函数对应`set(newval){}`函数.
  - `set(newval)(){}`函数和`[[Value]]`属性不能同时存在。
  
```js
    const obj={name_:'xixi'}
    Object.defineProperty(obj,"name",{
        set(newVal){
            this.name_=newVal
        }
        get(){
            return this.name_
        }
    })

```

- 合并对象
  - 合并对象ECMAScript 6 专门为合并对象提供了 `Object.assign()`方法。
  - `Object.assign(target,copyVal)` 会改变`target`,并且返回`target`。
  - `Object.assign()` 属于浅赋值。
  
```js
    //example:浅赋值案例
    const obj={name:"ldf"}
    const obj1={age:18,score:{math:91}}
    const res = Object.assign(obj,obj1)
    console.log(res.score===obj1.score) //true
```

- 对象标识及相等判定
  - 使用 `===`
  - 使用 `Object.is()`,属于加强版 `===` 

# 创建对象

- 对象迭代
  - Object.values()返回对象值的数组
  - Object.entries()返回键/值对的数组。
  - Object.keys( )返回对象key的数组
  - Symbol 符号属性会被忽略


# 继承

# 类