/*
购物车特效实现：参考淘宝的多店铺效果
    - 商品列表渲染(目前是准备假数据)
    - 点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
    - 数量变-小计要跟着变
    - 删除当行
    - 全选：计算总价和总数量(很多地方需要调用该功能)
    - 全删:删除多行
*/


let goodCar = getid('goodCar');
let data = goodCar.getElementsByClassName('data')[0];

//1.获取列表页(list.html)的参数
let id = decodeURI(location.search).slice(1);//?之后的参数
let userid = getCookie('name');//拿到登录时候的name
// console.log(userid)
ajax({
    type: 'get',
    url: '../api/shoplist.php',
    data: {
        // type: 'shoplist',
        name:  userid
    },
    success: str => {
        console.log(str)
        let arr = JSON.parse(str);
       
        shopitem(arr)
    }
})

function shopitem(arr) {
    // console.log(arr)
    let listarr = arr[0].shuju.split('&'); //[1,3] [11,3] [15,3]
    // console.log( typeof  listarr)  object
    let newarr = []
    let idarr = [];
    // let shoptotail = [];
    for (let item of listarr) {
        let str = '';
        for (let i = 0; i < item.length; i++) {
            if (i > 0 && i < item.length - 1) {
                str += item[i];
            }
        }
        newarr.push(str.split(','))
    }
    // console.log(newarr)
    // let idarr = 
    for (let item of newarr) {
        idarr.push(Number(item[0]))
    }
    console.log(idarr)
    ajax({
        type: 'get',
        url: '../api/shopsearch.php',
        data: {
            idarr
        },
        success: val => {
            // console.log(typeof str)
            creat(val)
        }
    })
}

//2.数据渲染
function creat(val) {
    let arr = JSON.parse(val);
    let html = arr.map(item => {
        return `<div class="list" date-id="${item[0].id}">
                      <div class="con">
                          <div class="tex">
                              <input type="checkbox"class='danxuan'>
                              <div class="img-box"> <img src="${item[0].bigpics}""></div>
    
                              <h2>${item[0].titlte}</h2>
                              <h3>
                                  <p>颜色分类:</p>
                                  <p>尺码：</p>
                              </h3>
                              <h4>￥${item[0].price1}</h4>
                              <span>
                                  <p class='cutbtn'>-</p>
                                  <input type="text" value='1' data-kucun='${item[0].kucun}' class='good-num'>
                                  <p class='addbtn'>+</p>
                              </span>
                              <p class='xiangou'>(限购${item[0].kucun}件)</p>
                              <h5>${item[0].price1}</h5>
                              <h6><a href="" class='del'>删除</a></h6>
                          </div>
    
                      </div>
                    </div> `;
    }).join('');

    data.innerHTML = html;
    //找节点
    let quanXuan1 = goodCar.getElementsByClassName('quanxuan1')[0];//顶部全选框
    let quanXuan2 = goodCar.getElementsByClassName('quanxuan2')[0];//底部全选框
    let cut = data.getElementsByClassName('cutbtn');//减按钮
    let add = data.getElementsByClassName('addbtn');//加按钮
    let del = data.getElementsByClassName('del');//删除
    let danXuan = data.getElementsByClassName('danxuan');//单选
    var list = data.getElementsByClassName('list');//list
    let goodNum = data.getElementsByClassName('good-num');//input数量
    let danjia = data.getElementsByTagName('h4');//单价
    let zongjia = data.getElementsByTagName('h5');//总价
    let allNum = goodCar.getElementsByClassName('allNum')[0];//bottom的总件数
    let bottom = goodCar.getElementsByClassName('bottom')[0];//bottom的总件数
    let allDel = bottom.getElementsByClassName('p1')[0];//bottom的全删
    let allPrice = bottom.getElementsByClassName('allPrice')[0];//bottom的总价
    let jieSuan = bottom.getElementsByClassName('p4')[0];//bottom的总价


    //3.点击加减按钮、手动输入控制数量的改变(数量在库存范围内)

    function changeNum(num, now) { //封装上下限 加减都会用到
        let kucun = goodNum[now].dataset.kucun;//添加自定义属性
        //临界值
        if (num < 1) {
            num = 1;
        } else if (num > kucun) {
            num = kucun;
        }
        goodNum[now].value = num;//获取num的值显示到input上

        // 总金额=单价*数量
        zongjia[now].innerHTML = (num * danjia[now].innerHTML.slice(1)).toFixed(2);
    }

    for (let i = 0; i < add.length; i++) { //循环绑定索引
        add[i].index = i;
        cut[i].index = i;
        danXuan[i].index = i;
        goodNum[i].index = i;
        del[i].index = i;
        list[i].index = i;

        //加运算
        add[i].onclick = function () {
            console.log(this)
            let num = goodNum[this.index].value;
            num++;
            changeNum(num, this.index);
            total();
        }

        //减运算
        cut[i].onclick = function () {
            let num = goodNum[this.index].value;
            num--;
            changeNum(num, this.index);
            total();
        }

        //手动输入
        goodNum[i].oninput = function () {
            let num = this.value;
            changeNum(num, this.index);
            total();
        }

        //删除当行
        del[i].onclick = function () {
            let res = confirm('您真的要删除该行吗？');
            if (res) {
                data.removeChild(this.parentNode.parentNode); //删除con
            }
        }

        danXuan[i].onclick = () => {
            for (let i = 0; i < danXuan.length; i++) {
                total();
                color();
            }

        }

        // 全选：计算总价和总数量(很多地方需要调用该功能)
        quanXuan1.onclick = () => {
            for (let i = 0; i < danXuan.length; i++) {
                quanXuan2.checked = danXuan[i].checked = quanXuan1.checked;
                total();
                color();
            }
        }

        quanXuan2.onclick = () => {
            for (let i = 0; i < danXuan.length; i++) {
                quanXuan1.checked = danXuan[i].checked = quanXuan2.checked;
                total();
                color();
            }
        }


        //封装被勾选的个数
        function checkedNum() {
            var arr = [];//用来存放被勾选的个数
            for (let i = 0; i < danXuan.length; i++) {
                if (danXuan[i].checked) {
                    arr.push(1);
                }
            }
            return arr.length;//返回数组的长度
        }
        checkedNum();

        //封装勾选了单选框控制全选框 和总件数
        function allChecked() {
            let num = checkedNum();
            //统计已选的商品的总件数
            allNum.innerHTML = num;
            if (num == danXuan.length) { //判断 如果点击复选框的个数等于自身长度
                quanXuan1.checked = quanXuan2.checked = true;  //那么全选框的checked状态就应该为trye
            } else {
                quanXuan1.checked = quanXuan2.checked = false; //不满足的话全选框的状态就为false
            }
        }

        //反全选  选全部单选控制全选 还有总件数
        for (let i = 0; i < danXuan.length; i++) {
            danXuan[i].onclick = function () {
                allChecked();
                color();
                total();
            }
        }

        //总价格
        function total() {
            let allPriceStr = 0;
            for (let i = 0; i < danXuan.length; i++) {
                if (danXuan[i].checked) {
                    let str = Number(zongjia[i].innerHTML);
                    console.log(zongjia[i].innerHTML)
                    allPriceStr += str;
                }
            }
            allPrice.innerHTML = allPriceStr;
        }


        //全删
        allDel.onclick = function () {
            let res = confirm('您真的要全部删除吗？');
            if (res) {
                goodCar.removeChild(this.parentNode.previousElementSibling);
            }
        }

        //勾选复选框 显示颜色
        function color() {
            for (var i = 0; i < danXuan.length; i++) {
                if (danXuan[i].checked) {
                    jieSuan.style.backgroundColor = 'red';
                    jieSuan.style.cursor = 'pointer';
                    danXuan[i].parentNode.parentNode.style.backgroundColor = '#fff4e8';
                }
                else {
                    danXuan[i].parentNode.parentNode.style.backgroundColor = '';
                    jieSuan.style.backgroundColor = '';
                    jieSuan.style.cursor = '';
                }
            }
        }

    }

}