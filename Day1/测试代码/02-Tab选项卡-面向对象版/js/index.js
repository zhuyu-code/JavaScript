/*
/!*
window.onload =function () {
   // 1.1 获取需要的标签
   var lis = document.getElementById('tab-header').getElementsByTagName('li');
   var contents =  document.getElementById('tab-content').getElementsByClassName('dom');

   // 1.2 遍历
   for(var i=0; i<lis.length; i++){
       // 1.2.1 取出单个对象
       var li = lis[i];
       li.id = i;

       // 1.2.2 监听鼠标的移动事件
       li.onmousemove = function () {
           // 让所有的li的class都清除
           for(var j=0; j<lis.length; j++){
               lis[j].className = '';
               contents[j].style.display = 'none';
           }

          // 设置当前li的class
          this.className = 'selected';
          // 从contents数组中取出对应的标签
          contents[this.id].style.display = 'block';
       }

   }
 };
*!/


function $(id) {
    return document.getElementById(id);
}

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
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
        }
    },

    bindEvent: function () {
        var self = this;
        for(var i=0; i<this.lis.length; i++){
            this.lis[i].onmousemove = function () {
                 self.handler(this);
            }
        }
    },
    
    handler: function (that) {
        // 让所有的li的class都清除
        for(var j=0; j<this.lis.length; j++){
            this.lis[j].className = '';
            this.contents[j].style.display = 'none';
        }

        // 设置当前li的class
        that.className = 'selected';
        // 从contents数组中取出对应的标签
        this.contents[that.index].style.display = 'block';
    }
    

    /!*handler: function (that) {
        for(var i=0; i< this.lis.length; i++){
            console.log(this.lis[i]);
            this.lis[i].className = '';
            this.contents[i].style.display = 'none';
        }
        that.className = 'selected';
        this.contents[that.index].style.display = 'block';
    }*!/

};

var tab =  new TabsFn();
tab.init();
*/
var tab = new TabsFn();
tab.init();
