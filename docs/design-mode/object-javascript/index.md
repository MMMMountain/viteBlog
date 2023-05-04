# 概述

- JavaScript 没有提供传统面向对象语言中的类式继承，而是通过原型委托的方式来实现对象与对象之间的继承。JavaScript 也没有在语言层面提供对抽象类和接口的支持。正因为存在这些跟传统面向对象语言不一致的地方，我们在用设计模式编写代码的时候，更要跟传统面向对象语言加以区别。所以在正式学习设计模式之前，我们有必要先了解一些 JavaScript 在面向对象方面的知识。

## 动态类型语言和鸭子类型

- 编程语言按照数据类型大体可以分为两类，一类是静态类型语言，另一类是动态类型语言。
- 不关心当前类或者对象的类型，只要满足我们所有的属性或或者方法就行。
- 鸭子类型：差一只鸭子，最后找来了一只鸡，鸡也能学鸭子叫，那么这只鸡也满足并且加入了合唱团。

```js
const arr = [];
function joinArr(animal) {
  if (animal && typeof animal.soundDuck === "function") {
    arr.push(animal);
  }
}
const duck = {
  soundDuck() {
    console.log("duck gaga");
  },
};
const chicken = {
  soundDuck() {
    console.log("duck gaga");
  },
};
joinArr(chicken);
joinArr(duck);
arr.forEach((item) => item.soundDuck());
```

## 多态

- 多态就是一个函数中传入的变量是一个基类对象，执行这个基类对象的函数可能会有不同的结果。
- 在 JavaScript 这种将函数作为一等对象的语言中，函数本身也是对象，函数用来封装行为并且能够被四处传递。当我们对一些函数发出“调用”的消息时，这些函数会返回不同的执行结果，这是“多态性”的一种体现，也是很多设计模式在 JavaScript 中可以用高阶函数来代替实现的原因。

```js
    function mankSound(animal){
        animal.sound()
    }
    const cat={
        sound(){
            console.log("cat miaomiao")
        }
    }
     const dog={
        sound(){
            console.log("dog wangwang")
        }
    }

    mankSound(cat)
    mankSound(dog)
```

## 封装

- 封装的目的是将信息隐藏。一般而言，我们讨论的封装是封装数据和封装实现。
- 从设计模式的角度出发，封装在更重要的层面体现为封装变化。

## 原型模式和基于原型继承的 JavaScript 对象系统
