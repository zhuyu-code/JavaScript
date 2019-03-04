function TabsFn() {
    // 属性
    this.lis = $('tab-header').getElementsByTagName('li');
    this.contents =  $('tab-content').getElementsByClassName('dom');
}

TabsFn.prototype = {
    init: function () {
        // 1. 设置索引
        this.setIndex();
        // 2. 监听点击
        this.bindEvent();
    },
    setIndex: function () {
        for(var i=0; i<this.lis.length; i++){
            this.lis[i].index = i;
        }
    },
    bindEvent: function () {
        var self = this;
        for(var i=0; i<this.lis.length; i++){
            this.lis[i].onmouseover = function () {
                // 让所有的li的class都清除
                for(var j=0; j<self.lis.length; j++){
                    self.lis[j].className = '';
                    self.contents[j].style.display = 'none';
                }

                // 设置当前li的class
                this.className = 'selected';
                // 从contents数组中取出对应的标签
                self.contents[this.index].style.display = 'block';
            }
        }
    }
};
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}