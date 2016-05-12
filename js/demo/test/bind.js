/**
 * Created by giant.cai on 2016-04-18.
 * 测试bind方法和this关键字
 */
var n = 'global';
var a = {n: 'a'};
var b = {n: 'b'};
function f() {
    console.log(this.n);
}

f();
b.f = f;
b.f()
f.apply(a);

f.bind(a)();
console.log('1111111111111111111111111111111');
f.bind(a).apply(b);  // 竟然还是a
f.bind(a).apply({n: 'nnn'}); // 竟然还是a

(function () {
    "use strict";
    f();
    function g() {
        console.log(this === undefined ? 'this is undefined' : this.n);
    }

    g();
})();


