(() => {

    //1.获取列表页(list.html)的参数
    let id = decodeURI(location.search).slice(1);//?之后的参数
    let pt_data_c = document.getElementsByClassName('pt-data-c')[0];


    //2.获取list数据 ajax
    ajax({
        type: 'get',
        url: '../api/details.php',
        data: {
            id
        },
        success: val => {
            //  console.log(val);
            creat(val);
        }
    });

    function creat(val) {
        let arr = JSON.parse(val);

        let html = arr.map(item => {
            return `    <!-- 商品标题 -->
                        <div class="data-c-tit">
                            <img src="../css/img/datalis-2.png" alt="">
                            <h2>${item.titlte}</h2>
                        </div>
                        <!-- 详情价格区 -->
                        <div class="data-pval">
                            <ul>
                                <li class="pval-ms">
                                    <span>奥莱价:</span>
                                    <em>¥${item.price1}</em>
                                    <del>¥${item.price2}</del>
                                </li>
                            </ul>
                        </div>
                        <!-- 选择区 -->
                        <ul class="skuAttrs">
                            <li class="data-attr1">选择颜色：</li>
                            <li class="data-attr2">
                                <div class="ptattr attr-sec">黑色</div>
                            </li>
                        </ul>
                        <ul class="skuAttrs">
                            <li class="data-attr1">选择尺码：</li>
                            <li class="data-attr2">
                                <div class=" attr-sec">150/76A</div>
                                <div class=" attr-sec">155/80A</div>
                                <div class="attr-sec">155/90A</div>
                            </li>
                        </ul>
                        <!-- 数量确定区 -->
                        <div class="buy-container">
                            <div class="data-number">
                                <ul>
                                    <li class="data-number5">
                                        <div class="dtnum2">选择数量</div>
                                        <div class="dtnum3">剩余
                                            <em>${item.kucun}</em>
                                            件&nbsp;&nbsp;
                                        </div>

                                    </li>
                                    <li class="data-number2">
                                        <div class="pt-nk">
                                            <input type="text" class="datanub-value" value="1" data-kucun='${item.kucun}'>
                                        </div>
                                        <div class="pt-ns">
                                            <p id='add'>+</p>
                                            <p id='cut'>-</p>
                                        </div>
                                    </li>
                                    <li class="data-number3">
                                        <h2>加入购物车</h2>
                                    </li>
                                </ul>
                            </div>
                            <div class="data-sao">
                                <span class="phone">
                                    <img src="http://skin.aolaigo.com//image/product/icon_phone.png" alt="">
                                </span>
                                <ul>
                                    <li class="lids1">手机购买</li>
                                    <li class="lids2">
                                        <img src="http://skin.aolaigo.com//image/product/more_unfold.png" alt="">
                                    </li>
                                </ul>
                                <div class="dstelma">
                                    <img src="http://img3.aolaigo.com/group1/M00/2D/40/CggUF1m5NjiAYFEkAAAI7tB9bs8356.png"
                                        alt="">
                                </div>
                            </div>
                        </div>`;
        }).join('');

        pt_data_c.innerHTML = html;

        //滑过高亮
        let data_attr2 = document.getElementsByClassName('data-attr2')[1];
        let ptattr = data_attr2.getElementsByTagName('div');

        for (var i = 0; i < ptattr.length; i++) {
            ptattr[i].onclick = function () { //给所有span绑定事件
                for (var i = 0; i < ptattr.length; i++) { //清空
                    ptattr[i].className = 'attr-sec';
                }
                this.className = 'attr-sec  active'; //给相应的加高亮
            }
            ptattr[0].className = 'attr-sec  active';

        }




        let lids2 = document.getElementsByClassName('lids2')[0];
        let dstelma = document.getElementsByClassName('dstelma')[0];
        lids2.onmouseover = () => {
            dstelma.style.display = 'block';
        }
        lids2.onmouseout = () => {
            dstelma.style.display = 'none';
        }






        //3.点击加减按钮、手动输入控制数量的改变(数量在库存范围内)

        let goodNum = document.getElementsByClassName('datanub-value')[0];//input数量
        let add = document.getElementById('add');
        let cut = document.getElementById('cut');
        for (let i = 0; i < add.length; i++) { //循环绑定索引
            add[i].index = i;
            cut[i].index = i;
            goodNum[i].index = i;

            function changeNum(num, now) { //封装上下限 加减都会用到
                let kucun = goodNum.dataset.kucun;//添加自定义属性
                //临界值
                if (num < 1) {
                    num = 1;
                } else if (num > kucun) {
                    num = kucun;
                }
                goodNum[now].value = num;//获取num的值显示到input上

            }

            //加运算
            add.onclick = function () {
                console.log(this)
                let num = goodNum[this.index].value;
                num++;
                changeNum(num, this.index);


            }

            //减运算
            cut.onclick = function () {
                let num = goodNum[this.index].value;
                num--;
                changeNum(num, this.index);

            }

            //手动输入
            goodNum.oninput = function () {
                let num = this.value;
                changeNum(num, this.index);

            }

        }

    }






    //3.对列表( categoryMenu )进行渲染
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



    // 4.渲染足迹
    let goods = document.getElementById('goods');

    ajax({
        type: 'get',
        url: '../api/list.php',
        data: {
            id
        },
        success: val => {
            //  console.log(val);
            created(val);
        }
    });


    function created(val) {
        let arr = JSON.parse(val);
        let goodlist = localStorage.goodlist;//字符串 3&2&1
        let data = goodlist.split('&').reverse();//[1,2,3] 数组  最新点击的放在最前面
        // console.log(data)
        let str = '';
        //两个都是数组 循环里面有循环
        for (let item of data) {
            //item:足迹存起来的id
            for (let obj of arr) {
                //遍历数据，obj对象
                if (item == obj.id) { //足迹传过来id = arr里面id
                    str += ` <li>
                                    <div class="rt-val1">
                                        <img src="${obj.bigpics}" alt="">                        
                                    </div>
                                    <h2 data-id="${obj.id}">${obj.titlte}</h2>
                                    <div class="rt-val3">
                                        <span class="price">¥${obj.price1}</span>
                                </div>
                                </li>`;
                }
            }

        }
        goods.innerHTML = str;



        //右侧运动
        //6.点击左右按钮可以切换小图位置
        // var now = 0;
        let wrap = document.getElementById('pt-data-r');
        var box = wrap.getElementsByClassName('data-rt-val')[0];
        var prev = wrap.getElementsByClassName('arrow-left')[0];
        var next = wrap.getElementsByClassName('arrow-right')[0];
        // var smallers = wrap.getElementsByClassName('goods')[0];

        var iW = (goods.children[0].offsetHeight + 4) * 1;//一个li的宽度
        prev.onclick = function () {
            //上一张
            move(iW);
        }

        next.onclick = function () {
            move(-iW);
        }

        function move(speed) {//小图的运动
            var left = goods.offsetTop + speed;
            if (left <= box.offsetHeight - goods.offsetHeight + 20) {//临界值
                left = box.offsetHeight - goods.offsetHeight + 20;

            } else if (left >= 0) {
                left = 0;

            }
            goods.style.top = left + 'px';
        }

    }

    //5.推荐渲染
    let d_left_con = document.getElementById('d-left-con');
    ajax({
        type: 'get',
        url: '../api/list1.php',
        success: val => {
            //  console.log(val);
            left(val);
        }
    });
    function left(val) {
        let arr = JSON.parse(val);
        let html = arr.map(item => {

            return ` <ul>
                    <li><img src="${item.bigpics}" alt=""></li>
                    <li class="left-conli-txt">${item.titlte}</li>
                    <li class="left-conli-val">${item.price1}</li>
                </ul>`;
        }).join('');

        d_left_con.innerHTML = html;

    }







    //5.选项卡
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






})();