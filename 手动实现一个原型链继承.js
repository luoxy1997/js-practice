//  手动形成一个原型链继承
function Elem(div) {
    this.elem = document.getElementById(div);
}

//  扩展原型链的方法
Elem.prototype.html = function (val) {
    const elem = this.elem;
    console.log(val, 'val');
    if (val) {
        elem.innerHTML = val;
        //  写this是为了进行链式操作，把整个对象返回出去，可以连续进行DOM操作
        return this;
    }

    return elem.innerHTML;
};

Elem.prototype.on = function (type, fn) {
    const elem = this.elem;
    elem.addEventListener(type, fn);

    return this;
};

const div = new Elem();

//  获取div中的文字
console.log(div.html());

//  改变div中文字赋值
div.html('略略略略略略');

//  给div进行事件绑定
div.on('click',function(){
   alert('被点击了')
});

//  链式操作---连续进行DOM操作
div.html('略略略略略略').on('click',function(){
    alert('被点击了')
});



