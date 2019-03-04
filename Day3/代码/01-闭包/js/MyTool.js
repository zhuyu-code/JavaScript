function myTool() {
    // 1. 私有的数据
    var money = 1000;
    // 2. 提供操作私有数据的函数
    function get() {
        money *= 10;
        console.log('赚了一笔钱, 总资产:' + money + '元');
    }

    function send() {
        money --;
        console.log('花了一笔钱, 总资产:' + money + '元');
    }

    return {
        'get': get,
        'send': send
    }
}


