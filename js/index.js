//常规基础

// 一个变量如果没有进行初始化（只声明，不赋值），那么这个变量中存储的值是undefined

// ES6 常量
// const 常量名称 = 常量取值;

//ES5  变量
var name; // 定义一个名为 name 的变量。name是变量名。

//ES6
// const name; // 定义一个常量
// let age; // 定义一个变量




// 普通弹出
alert('我是第三种引用!  外链式');

// 弹出带确认取消
var result = confirm('第三种方式');
console.log(result);

// 带输入   prompt()语句中，用户不管输入什么内容，都是字符串。
var a = prompt('请随便输入点什么东西吧');
console.log(a);


// 140.82.113.3
// 199.232.69.194
// 185.199.108.153
// 185.199.109.153
// 185.199.110.153
// 185.199.111.153


// let arr1 = [1, 2, 3, 4, 5, 6];

// arr1.reduce((prev, item) => {
//     console.log(prev);
//     console.log(item);
//     console.log('------');
//     return 88;
// }, 0);


//数组求和
// const arr = [2, 0, 1, 9, 6];

// const total = arr.reduce((prev, item) => { return prev + item });
// console.log('total:' + total);

function getMaxValue() {
    var max = arguments[0];
    // 通过 arguments 遍历实参
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMaxValue(1, 3, 7, 5));

setInterval(function fun1() {
    console.log('测试!');
},1000)

// function Vip(str) {
//     console.log(str);
// }

