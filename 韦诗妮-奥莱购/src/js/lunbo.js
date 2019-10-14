function lunbo(opt) {
    //1.默认参数
    let defaultOpt = {
        iw: 800,//宽(可选，默认参数里有默认的样式)
        ih: 350,//高(可选，默认参数里有默认的样式)
        time: 3000,//过渡的时间(可选，有默认样式)
    }

    //2.配置参数有则用配置参数的 没有配置参数的数据则用默认参数的数据
    Object.assign(defaultOpt, opt); //opt:配置参数 使用的是默认参数

    /*
   需求：轮播图第二种写法，图片是水平平铺，ul运动 障眼法
       * 渲染数据到页面:li和焦点(分页)
       * 把第一张复制到末尾
       * ul的总宽：图片的个数 * 图片宽度
       * 开启定时器：自动轮播
       * 点击上下按钮可以切换图片
       * 点击焦点切换到对应图片
*/
    let box = getid(defaultOpt.ele);
    let ul = box.getElementsByTagName('ul')[0];
    let page = box.getElementsByClassName('page')[0];
    let prevBtn = box.getElementsByClassName('prev')[0];
    let nextBtn = box.getElementsByClassName('next')[0];
    let timer = null;
    let now = 0;//当前播放的下标


    //3.渲染数据
    let strUl = '';
    let strSpan = '';
    defaultOpt.datalist.forEach((item, index) => {
        strUl += `<li data-index="${index}"><img src="${item}"></li>`;
        strSpan += `<span class=''>${index + 1}</span>`;
    });

    ul.innerHTML = strUl;
    page.innerHTML = strSpan;
    page.children[0].classList.add('active'); //classList的方法 添加class名

    //4.把第一张复制到ul的最后
    let firstLi = ul.children[0].cloneNode(true);//拷贝一定要和插入节点一起使用
    ul.appendChild(firstLi);


    //5.设置box和li的尺寸
    let alis = box.getElementsByTagName('li');
    for (let i = 0; i < alis.length; i++) {
        alis[i].style.width = defaultOpt.iw + 'px';
        alis[i].style.height = defaultOpt.ih + 'px';
    }
    box.style.width = defaultOpt.iw + 'px';
    box.style.height = defaultOpt.ih + 'px';


    //6.ul的总宽：图片的个数 * 图片宽度
    let iw1 = ul.children[0].offsetWidth;
    ul.style.width = iw1 * ul.children.length + 'px';



    //7.开启定时器：自动轮播
    timer = setInterval(next, defaultOpt.time);

    function next() {//下一张
        now++;
        tab();
    }

    function prev() {//上一张
        now--;
        tab();
    }

    //切换图片
    function tab() {
        //临界值
        if (now > ul.children.length - 1) { //到ul的最后一张 左走
            now = 1;//回到第二张
            ul.style.left = 0; //ul回到最左边 避免留白
        } else if (now < 0) {//右走
            now = ul.children.length - 2;//回到倒数第二张
            ul.style.left = (ul.children.length - 1) * -iw1 + 'px';//往右边走
        }
        startMove(ul, { 'left': now * -iw1 });//每次运动一个li宽度
        ligth();
    }

    //焦点跟随
    function ligth() {
        //排他
        for (let ele of page.children) {
            ele.classList.remove('active');
        }
        let index = ul.children[now].dataset.index; //获取li的索引值 给焦点的索引
        // console.log(index)
        page.children[index].classList.add('active');

    }

    //8.点击上下按钮可以切换图片
    box.onmouseover = () => {
        clearInterval(timer);
    }

    box.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, defaultOpt.time);
    }

    //9.点击按钮切换图片
    prevBtn.onclick = () => {
        prev();
    }

    nextBtn.onclick = () => {
        next();
    }


    //10.点击焦点切换图片
    page.onclick = ev => {
        if (ev.target.tagName == 'SPAN') {
            now = ev.target.innerHTML-1; //把span的内容给now
            tab();
        }
    }
}





