//js库文件：仿jq，这里提供一些方法，以后可以反复调用，提高我们开发效率

/*
 * @Description: 封装一个函数可以实现下拉菜单的显示隐藏(点击版)
 * @Author: 大哲
 * @Date: 2019-07-23 15:21:00
 * @LastEditTime: 2019-07-23 16:10:27
 * @LastEditors: Please set LastEditors
 */

//点击隐藏显示
function hideShow(btn, ele) {//要参数：参数一：点击的对象；参数二：显示隐藏的对象
    btn.onclick = function () {
        if (ele.style.display == 'block') {//null == 'block'  'block'== 'block' 'none'=='block'
            ele.style.display = 'none';
        } else {
            //第一次：显示
            ele.style.display = 'block';
        }
    }
}

//封装最小值到最大值的随机数
function ranNum(min, max) {
    //得到一个min到max之间的随机数：极限的时候,Math.random()为零的时候，最小的时候;Math.random()是1的时候是最大的时候
    return parseInt(Math.random() * (max - min + 1)) + min;
}

/*
   通过id获取元素
   参数：id
   返回值：节点
*/
function getid(id) {
    return document.getElementById(id);
}


//封装参数部分做对象
function strToObj(str) {
    var obj = {};
    var arr1 = str.split('&');//['name=apple','price=8999']
    for (var i in arr1) { //看到数组就循环
        var arr = arr1[i].split('=');//['name','apple'] ['price','8999']
        obj[arr[0]] = arr[1];//把键值赋给键名
        // console.log(obj)
    }
    return obj;
}

//给一个对象，封装成参数拼接在网站后面(得到：http://www.baidu.com？name=apple&price=7890)
function showObj() {
    var str = '';
    for (var i in obj) {
        str += i + '=' + obj[i] + '&';//i：键名   obj[i]:键值
    }
    var str1 = str.slice(0, -1);
    var str2 = url + str1;
}

//封装函数去重
function norepeat(arr) {
    var newarr = [];
    arr.forEach(function (item) {
        if (!newarr.includes(item)) {
            //不存在
            newarr.push(item);
        }
    });
    return newarr;//去重的数组
}

//封装函数过滤敏感词(在后面调用实参即可)
function filter(str) {
    var arr = ['fuck', '草', '小学生', 'fuck', '滚犊子', '垃圾', '滚犊子']
    arr.forEach(function (item) {
        var reg = new RegExp(item, 'ig');//定规则 i-忽略大小写  g-全局匹配
        str = str.replace(reg, '***');//替换字符串
    });
    return str;
}

//封装时间(系统时间) 
function toDb(num) {
    if (num < 10) { //时间为一个数的时候拼接0
        return '0' + num; //字符串
    } else {
        return '' + num; //字符串
    }
}

/*
   将秒转成：xx天xx时xx分xx秒
   参数：秒数
   返回值：返回相关数据，做成json
*/
function timeset(num) {
    //num 秒数
    var sec = toDb(num % 60);//秒
    var min = toDb(parseInt(num / 60) % 60);//分
    var hour = toDb(parseInt(num / 60 / 60) % 24);//时
    var day = toDb(parseInt(num / 60 / 60) / 24);//天
    return {
        'secs': sec,
        'mins': min,
        'hours': hour,
        'days': day
    }
}

//封装生成16进制的随机背景色
function rgb() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";
}

/*
  把字符串变为对象
  输入数据：id=01name=iphone7%20plugsimgsrc=../img/ip7.jpgcolor=土豪金yuanjia=77xianjia=77
  输出数据：：obj={id:01,name:iphone7%20plugs}
 
*/
function strToObj(str) { //str 形参
    //1、&作为切割点
    var json = {};//创建一个空的json对象 放最后的结果
    var arr1 = str.split('&');
    // console.log(arr1);  //["id=01", "name=iphone7 plugs", "imgsrc=../img/ip7.jpg", "color=土豪金", "yuanjia=77", "xianjia=77"]

    //2、循环数组 再以=为切割点
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        //  console.log(arr2);//["id", "01"]  ["name", "iphone7 plugs"]
        json[arr2[0]] = arr2[1]; //把键值赋给建名 arr2[0]：id; arr2[1]:01 
    }
    // console.log(json)
    return json;

}

/*
  把对象变为字符串
  输入数据：obj={id:01,name:iphone7%20plugs}
  输出数据：id=01name=iphone7%20plugsimgsrc=../img/ip7.jpgcolor=土豪金yuanjia=77xianjia=77
 
*/
function objToStr(obj) {
    var res = '';//存放参数的字符串
    for (var key in obj) { //key：键名 
        res += key + '=' + obj[key] + '&';  //拼接成字符串形式
        res = res.slice(0, -1);//把最后的一个&去掉
    }
    return res;
}


/*
   兼容处理：获取第一个子元素
   ele：父节点
*/
function firstChild(ele) {
    if (ele.firstElementChild) {
        //证明在高级浏览器下面：谷歌、火狐、欧朋、苹果、IE9+
        return ele.firstElementChild;
    } else {
        //低版本
        return ele.firstChild;
    }
}


/*
   兼容处理：获取最后一个子元素
   ele：父节点
*/
function lastChild(ele) {
    if (ele.lastElementChild) {
        return ele.lastElementChild;
    } else {
        return ele.lastChild;
    }
}


/*
   兼容处理：获取前一个兄弟元素
   ele：父节点
*/
function preBrother(ele) {
    if (ele.previousElementSibling) {
        return ele.previousElementSibling;
    } else {
        return ele.previousSibling;
    }
}


/*
   兼容处理：获取下一个兄弟元素
   ele：父节点
*/
function nextBrother(ele) {
    if (ele.nextElementSibling) {
        return ele.nextElementSibling;
    } else {
        return ele.nextSibling;
    }
}


/* 
    仿jq的css()方法，设置和获取样式  没有单位
    css(box,'width') 获取box的width样式
    css(box,'height','200px') 给box设置样式
    arguments : 数组,用来存实参的，当实参个数不定的时候，就用arguments来接收实参
*/

function css() {
    if (arguments.length == 2) { //获取样式 width:200px; arguments[0]:width(ele要获取的元素)   arguments[1]:200px(属性值)

        if (getComputedStyle(arguments[0], false)) {
            //标准式
            var attr = arguments[1];
            return getComputedStyle(arguments[0], false)[attr];
        } else {
            //ie8-
            var attr = arguments[1];
            return arguments[0].currentStyle[attr];
        }


    } else {
        if (arguments.length == 3) {  // arguments[0]:box  arguments[1]:display  arguments[2]:none
            //设置样式 box.style.display = 'none'
            var attr = arguments[1];
            return arguments[0].style[attr] = arguments[2];
        }
    }
}


/*
  正则大全
   var str = 'ssssd7.com';
   var ok = regChecked.mail(str);
*/
var checkReg = {
    email: function (str) {//邮箱验证
        var reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel: function (str) {//手机号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    qq: function (str) {//腾讯QQ号(腾讯QQ号从10000开始)
        var reg = /[1-9][0-9]{4,}/;
        return reg.test(str);
    },
    mail: function (str) {// 中国邮政编码 (中国邮政编码为6位数字)
        var reg = /[1-9]\d{5}(?!\d)/;
        return reg.test(str);
    },
    zhanghao: function (str) {//账号（字母开头，允许5-16字节，允许字母数字下划线）
        var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        return reg.test(str);
    },
    password: function (str) {// 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    num1: function (str) {//正数、负数、和小数：
        var reg = /^(\-|\+)?\d+(\.\d+)?$/;
        return reg.test(str);
    },
    num2: function (str) {// 英文和数字
        var reg = /^[A-Za-z0-9]+$/;
        return reg.test(str);
    },
    num3: function (str) {//  中文、英文、数字包括下划线
        var reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
        return reg.test(str);
    },
    chinese: function (str) {//汉字
        var reg = /^[\u4e00-\u9fa5]{0,}$/;
        return reg.test(str);
    },
    birthday: function (str) {//生日
        var reg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        return reg.test(str);
    },
    idcard: function (str) {//18位身份证
        var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        return reg.test(str);
    }



}

/* 
  表单验证
     checkInput({
            ele: ainputs[0],
            inf: infs[0],
            type: 'email',
            noval: '请输入邮箱地址',
            checkYes: '邮箱验证通过',
            checkNo: '邮箱验证不通过'
        });
*/
function checkInput(opt) {
    opt.ele.onblur = function () {
        var val = this.value.trim();
        if (val) {
            //非空验证
            var str = `checkReg.${opt.type}(val)`;//eval() 把字符串转成js代码
            var isok = eval(str);
            if (isok) {
                //正则验证通过
                opt.inf.innerHTML = opt.checkYes;
                opt.inf.style.color = '#58bc58';
                istrue1 = true;
            } else {
                opt.inf.innerHTML = opt.checkNo;
                opt.inf.style.color = 'red';
                istrue1 = false;
            }
        } else {
            opt.inf.innerHTML = opt.noval;
            opt.inf.style.color = 'red';
        }
    }
}


/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}


/*
     仿jq的ajax封装:
         ajax({
            type:'get',(必填)
            url:接口,(必填)
            data:{  //(选填) 是否需要传数据到后端
                    name ：'蛋黄酥',
                    price : '39.9'
             },
            asyn:true,(选填 true:异步  flase:同步)

            success : function(str) {
                       //成功的回调
                   },
            error : function(status) {//可选的 可查看是什么原因出错
                       //失败的回调
            }
         })；
*/

function ajax(opt) {
    //默认参数
    let defaultOpt = {
        data: '',
        asyn: true,
        error: null
    }

    Object.assign(defaultOpt, opt);//用defaultOpt

    //1.创建对象
    let xhr = new XMLHttpRequest();

    //2.发送请求使用post或post方法
    if (defaultOpt.type.toLowerCase() == 'get') {
        //get请求
        if (defaultOpt.data) {
            //有数据，把数据拼接在url
            defaultOpt.url = defaultOpt.url + '?' + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else {
        //post请求
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xhr.send(data);
    }

    //4.接收数据
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //成功
                defaultOpt.success(xhr.responseText);//形参
            } else {
                //失败
                if (defaultOpt.error) {
                    defaultOpt.error(xhr.status);//实参：http状态码
                }
            }
        }
    }
}


//获取cookie  getCookie('email');
function getCookie(key) {
    let str = document.cookie;//username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}


//设置cookie  setCookie('email', mail.value.trim(), 7);
function setCookie(key, val, iday) {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

//删除   removeCookie('username');
function removeCookie(key) {
    setCookie(key, '', -1);
}



function getTimeSec(secs) {
    let time = new Date(secs * 1000);
    // console.log(time);
    let year = time.getFullYear();
    let mon = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    return {
        year,
        mon,
        date,
        hours,
        mins,
        sec
    }
}