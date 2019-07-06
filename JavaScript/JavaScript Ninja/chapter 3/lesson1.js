function ninjaFunction() {} // 通过字面量创建
var ninjaFunction = function() {} // 为变量赋值一个新函数
ninjaFunction.data = function () {} // 给某个对象的属性赋值为一个新函数

// 作为函数函数的参数来传递

function call (ninjiaFunction) {
    ninjaFunction ()
}
call (function () {}) // 一个新函数作为参数传递给函数

// 作为函数的返回值
function returnNewNinjaFunction () {
    return function () {} // 返回一个新函数
}
