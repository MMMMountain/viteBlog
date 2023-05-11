# 策略模式

- 策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。我们可以选取不同的方法（策略）来获得相同的结果。
- 当我们做同一件时，而存在处理不同业务逻辑时，我们可以将这些业务逻辑封装起来。作用策略，供后续使用。

## 使用策略模式计算奖金

- class 版本

```js
  function strategies(){
    return {
        "S":function(salary){
        return salary*4
        },
        "A":function(salary){
            return salary*3
        },
        "B":function(salary){
            return salary*2
        },
    }
  }

  function CalaSalary(sType,salary,strategies){
    this.sType=sType
    this.salary=salary
    this.strategies=strategies
  }
  CalaSalary.prototype.getSalary=function(){
    return this.strategies[this.sType](this.salary)
  }
  
  const s=new CalaSalary('A',20000,strategies())
  console.log(s.getSalary())
```

## js版本的策略模式

```js
//这里我们把策略定义出来
const strategies={
    "s":function(salary){
        return salary*4
    },
    "A":function(salary){
        return salary*3
    },
    "B":function(salary){
        return salary*2
    },
}
const calaSalary=function(sType,salary){
    return strategies[sType](salary)
}
console.log(calaSalary("A",20000))
//这里将传入不同的类型，得到不同的结果。属于多态性的体现。
```

## 多态在策略模式中的体现

- 上面案例中，将传入不同的类型，得到不同的结果。属于多态性的体现。

## 使用策略模式实现缓存动画

## 更广义的算法

## 表单验证

- 保单验证符合策略模式，做同一件事只会触发一个规则。
- 验证规则如下 1.用户名不能为空 2.密码长度不能少于 6 位 3.手机号码必须符合格式

## 策略模式的优缺点

- 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
- 策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，易于理解，易于扩展。
- 避免许多重复的复制粘贴工作。
- strategy 要向客户暴露它的所有实现，这是违反最少知识原则的。

## 一等函数对象与策略模式