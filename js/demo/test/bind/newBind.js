/**
 * Created by giant.cai on 2016-04-18.
 * 测试bind方法和this关键字
 */

var a = {
    n: 7
}
var b = {
    n: 8,
    f: function (x, y, z) {
        console.log(arguments, this.n);
    }
}

// 使用Function.prototype.bind作为Function.prototype.call的上下文
var newBind = Function.prototype.call.bind(Function.prototype.bind);

// 调用Function.prototype.call的效果就是，
// 使用第一个参数b.f去调用Function.prototype.call的上下文（这里是Function.prototype.bind）
// 显然b.f调用Function.prototype.bind的效果是，返回一个新的b.f函数，它的上下文指定为第二个参数（a），并且currying部门参数
var newF = newBind(b.f, a, 1, 2)

// OK，再继续提供第三个参数调用
newF(3);  // 打印  { '0': 1, '1': 2, '2': 3 } 7

