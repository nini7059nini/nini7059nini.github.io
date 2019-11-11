const https = require('https');
//引入db.js中增的写法
const { insert } = require('./db');
https.get('https://m.maoyan.com/ajax/movieOnInfoList?token=', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        //拿数据
        let movie = JSON.parse(rawData).movieList;
        console.log(movie);
        movie.forEach(element => {  //每个遍历的对象：element
            //插入到数据库中
             insert('movie',[{
                nm:element.nm,
                sc:element.sc,
                star:element.star,
                showInfo:element.showInfo,
                img:element.img,
             }])
        })
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});