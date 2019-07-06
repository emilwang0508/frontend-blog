### 函数的定义
#### 定义函数的4类方式
##### 1. 函数声明和函数表达式
```
functiion myFun1() {
    return 1
}
var myFun2 = function() {
    return 2
}
```
##### 2. 箭头函数
```
myArg => myArg*2
```
##### 3. 函数构造函数
```
new Function('a','b','return a + b')
```
##### 4. 生成器函数
```
function* myGen() { yield 1 }
```