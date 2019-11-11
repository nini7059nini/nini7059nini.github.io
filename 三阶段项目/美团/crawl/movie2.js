const http = require('http');
//引入db.js中增的写法
const { insert } = require('./db');
http.get('http://m.maoyan.com/ajax/comingList?ci=20&token=&limit=10', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        //拿数据
        let movie2 = JSON.parse(rawData).coming;
        console.log(movie2);
        movie2.forEach(element => {  //每个遍历的对象：element
            //插入到数据库中
             insert('movie2',[{
                nm:element.nm,
                wish:element.wish,
                rt:element.rt,
                showInfo:element.showInfo,
                img:element.img,
                star:element.star,
                comingTitle:element.comingTitle
             }])
        })
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});