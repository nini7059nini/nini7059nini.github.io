(() => {

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
                str2 += `<p>${arrlist[i]}</p><span>></span>`;
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



    //2.获取列表数据ajax
    let pro_ul = document.getElementById('pro_ul');
    let pages = document.getElementById('pages');
    let ipage = 1;//获取第一页
    let num = 4;//每页5条数据
    let paixu = '';
    function init() {
        ajax({
            type: 'get',
            url: '../api/getpage.php',
            data: {
                ipage,
                num,
                paixu
            },
            success: val => {
                // console.log(val);
                create(val);
            }
        });

        function create(val) {
            let arr = JSON.parse(val);
            // console.log(arr);
            let html = arr.list.map(item => {
                let arrimgs = item.xiaotu.split(',');
                // console.log(arrimgs)
                let val1 = '';
                //先拼接xiaotu
                for (let i in arrimgs) {
                    val1 += `  <img class="xiaotu" src="${arrimgs[i]}" alt="">`;
                }
                return ` <li data-id="${item.id}"  id ="pro_li">
                            <img src="${item.bigpics}" alt="" class="bigpic">
                            <ol class='smpic'>
                              ${val1}
                            </ol>
                            <div class="val">
                                <h2>¥${item.price1}</h2>
                                <h3>¥${item.price2}</h3>
                            </div>
                            <div class="tex">
                                <h5>${item.titlte}</h5>
                            </div>
    
                        </li>`;

            }).join('');
            pro_ul.innerHTML = html;

            //2.根据总条数和每页的条数，生成页码  总条数：33  每页显示：5条 多少页：7== Math.ceil(33/5)
            let sum = Math.ceil(arr.total / num); //总页数
            let aStr = '';
            for (let i = 0; i < sum; i++) {
                aStr += `  <li class="mashu">${i + 1}</li>`;
            }
            pages.innerHTML = aStr;
            pages.children[ipage - 1].classList.add('mashu1');//高亮

            //3.点击跳转到对应的内容
            pages.onclick = ev => {
                if (ev.target.tagName == 'LI') {
                    // console.log(ev.target.innerHTML);
                    ipage = ev.target.innerHTML; //点击的页码对应后端通过页码传出来的内容
                    init(); //点击页面获取新的内容
                }
            }


            //3.大小图切换

            let apics = pro_ul.getElementsByClassName('xiaotu');//所有的图片
            var smpic = pro_ul.getElementsByClassName('smpic');//ol盒子

            for (let i = 0; i < smpic.length; i++) {
                smpic[i].onmouseover = function (ev) { //点击的是img
                    if (ev.target.tagName == 'IMG') {
                        var src = ev.target.src;
                        ev.target.parentNode.previousElementSibling.src = src;//把点击的小图的路径传给大图
                        for (var i = 0; i < ev.target.parentNode.children.length; i++) { //点击小图对应的ol长度
                            ev.target.parentNode.children[i].className = ''; //排他
                        }
                    }
                    ev.target.className = 'smpic active';
                }
            }

            //4.点击商品大图可以跳转到详情页(循环所有的li并找到索引值，再给点击事件加上window.open()跳转)
            var bigpic = pro_ul.getElementsByClassName('bigpic');
            for (var i = 0; i < bigpic.length; i++) {
                bigpic[i].index = i;//绑定索引值
                bigpic[i].onclick = function () { //对象转成字符串
                    let id = this.parentNode.dataset.id;
                    zuji(id);
                    window.open('details.html?' + id);//跳转到详情页
                }
            }


            //5.足迹
            function zuji(id) {
                let goodlist = localStorage.goodlist; //存在localStorage
                if (goodlist) {
                    //证明有足迹
                    let str = '';
                    let arr = goodlist.split('&');//把字符串切割成数组
                    let index = arr.indexOf(id);//没有该数则直接拼在后面 有重复的话把前面的该数切掉，留最新的并拼在后面
                    if (index >= 0) {
                        //有该数
                        arr.splice(index, 1); //把重复的该数切掉
                        arr.push(id);//把该数拼到后面
                        str = arr.join('&');//把数组转成字符串
                        console.log(arr)

                    } else {
                        // -1 没有该数
                        str = goodlist + '&' + id;
                    }
                    localStorage.goodlist = str;//存该数
                } else {
                    //没有足迹 存起来(第一次)
                    localStorage.goodlist = id;
                }
            }


        }
    }
    init();


    //排序
    let asc = document.getElementById('asc');
    let desc = document.getElementById('desc');

    function sort() {
        let isok = true;
        if (isok) {
            asc.onclick = function () {
                ipage = 1;
                //升序
                paixu = 'ASC';
                init();

            }
            desc.onclick = function () {

                ipage = 1;
                //降序
                paixu = 'DESC';
                init();
            }
        } else {
            ipage = 1;
            paixu = '';
            init();
        }
    }
    sort();

    //6.渲染左边内容
    let leftUl = document.getElementById('leftUl');
    ajax({
        type: 'get',
        url: '../api/list1.php',
        success: str => {
            let arr = JSON.parse(str);
            console.log(arr)
            let html = arr.map(item => {
                return `  <ul class="left-ul">
                            <li><img src="${item.bigpics}" alt=""></li>
                            <li class="left-cons-txt">${item.titlte}</li>
                            <li class="left-cons-val">¥${item.price1}</li>
                        </ul> `;
            }).join('');
            leftUl.innerHTML=html;

        }
    });



})();