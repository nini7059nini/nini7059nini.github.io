//1.对列表( categoryMenu )进行渲染
let categoryMenu = document.getElementsByClassName('categoryMenu')[0];

ajax({
    type: 'get',
    url: '../api/menu.php',
    success: str => {
        // console.log(str)
        create(str)
    }
});


function create(str) {
    let arr = JSON.parse(str);
    //把list数据切割
    let html = arr.map(item => {
        let arrlist = item.list.split('&');
        let str2 = '';
        //先拼接list
        for (let i in arrlist) {
            str2 += `<p class='menu-p'>${arrlist[i]}</p><span>></span>`;
        }

        return `   <li>
                      <div class="categoryTpye">
                          <h3>${item.title}</h3>
                          <div>
                              ${str2}
                          </div>

                      </div>
                      <div class="categoryImg"><img src="${item.img}" alt=""></div>
                  </li>`;
    }).join('');
    categoryMenu.innerHTML = html;

         //点击跳转到列表页
         let menu_p = categoryMenu.getElementsByClassName('menu-p');
         console.log(menu_p)
         for (let i = 0; i < menu_p.length; i++) {
             menu_p[i].onclick = () => {
                 location.href = '../html/list.html';
             }
         }
}

//渲染品牌图片
let categoryImglist = document.getElementsByClassName('categoryImglist')[0];
console.log(categoryImglist)

ajax({
    type: 'get',
    url: '../api/pinpai.php',
    success: str => {
        let arr = JSON.parse(str);
        // console.log(arr)

        let html = arr.map(item => {
            return `<div><img src="${item.img}" alt=""></div>`;
        }).join('');
        categoryImglist.innerHTML = html;
    }


});

//选项卡
window.onload = function () {
    //调用
    let t = new Tab();
    t.init();
}

//构造函数：放属性
function Tab() {//这里的this指向实例t
    //var this = new Object();
    this.oBox = document.getElementsByClassName('categoryBox')[0];
    this.aInputs = this.oBox.getElementsByClassName('categoryBoxLi');//通过标签名查找元素
    this.aDivs = this.oBox.getElementsByClassName('categoryBoxList');//通过类名查找元素
}

//方法：构造函数.prototype.方法名
Tab.prototype.init = function () {//初始化方法
    //循环绑定事件
    for (var i = 0; i < this.aInputs.length; i++) {//this指向实例t
        this.aInputs[i].index = i;//添加索引，做一个标识，点击的时候就可以知道我点的是第几个了，this指向实例t
        let _this = this;
        this.aInputs[i].onclick = function () {//this指向实例t
            _this.move(this);//第一个this：指向aInputs，指向错误；第二个this：aInputs
            // window.tab();
        }
    }
}

Tab.prototype.move = function (now) {
    //排他:清空
    for (var i = 0; i < this.aInputs.length; i++) {
        this.aDivs[i].style.display = 'none';
    }
    // console.log(this);
    this.aDivs[now.index].style.display = 'block';//原本this:aInputs[i]当前的那个aInputs;现在：window
}


//楼层跳跃
//2、点击按钮可以跳转到相应的楼层(选项卡)
let ceiling_ul=document.getElementsByClassName('ceiling-ul')[0];
let bigpics=document.getElementsByClassName('bigpics')[0];
let btns=ceiling_ul.getElementsByClassName('ceiling-li');
let cons=bigpics.getElementsByTagName('img');


//1、楼层的宽度100%（样式），高度不能设置100%  高度是一屏（JS添加） 
for (var i = 0; i < cons.length; i++) {
    cons[i].style.height = window.innerHeight +'px';// 添加行内样式 撑开高度
}

// 2、点击按钮可以跳转到对应的楼层 （索引）
for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;//给每一个按钮绑定一个索引值
    btns[i].onclick = function () {//点击的时候获取当前被点击按钮下面的索引值
        //排他
        clear();
        this.style.color= 'rgb(214,21,25)';//点击哪个哪个高亮

        //控制对应楼层跳转
        var top = cons[this.index].offsetTop-70;//（找到对应的节点的下标cons[this.index]）
        // var iscroll = window.innerHeight * this.index;
        // window.scrollTo(0, iscroll);
        window.scrollTo(0, top);
    }
}

function clear() { //排他 函数封装
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.color= '';
    }
}

// 3、滚动到对应楼层的时候，对应按钮跟着高亮显示  (滚动事件)
window.onscroll = function () { //滚动的时候触发
    var scrollTop = window.scrollY; //获取滚动距离

    for (var i = 0; i < btns.length; i++) {
        if (scrollTop >= cons[i].offsetTop) {
            clear();//排他
            btns[i].style.color= 'rgb(214,21,25)';
        }
    }

}
