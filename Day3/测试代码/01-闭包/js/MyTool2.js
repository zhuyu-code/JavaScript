;(function (window) {
    // 1.私有数据
    var money =  1000;
    // 2. 操作数据的函数
    function get() {
        money++;
        console.log('赚了一笔钱, 总资产: ' + money + '元');
    }
    function send() {
        money--;
        console.log('花了一笔钱, 总资产: '+ money + '元');
    }

    //向外暴露对象(给外部使用的方法)
    window.myTool = {
        get: get,
        send: send
    }
})(window);

/*
   性能考虑, 作用域链条是递归查找对象的
   压缩考虑, a,b,c,...
*/