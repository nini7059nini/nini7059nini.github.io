const https = require('https');
//引入db.js中增的写法
const { insert } = require('./db');
https.get('https://h5.ele.me/pizza/shopping/restaurants/E5137835020840644732/batch_shop?code=0.3861342650298418&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=23.129112&longitude=113.264385', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        //拿数据
        let fooddetail = JSON.parse(rawData).menu;
        console.log(fooddetail);
        fooddetail.forEach(element => {  //每个遍历的对象：element
            //插入到数据库中
            insert('fooddetail', [{
                name: element.foods.name,
                description:element.foods.description,
                lowest_price:element.foods.lowest_price,
                rating:element.foods.rating,
                satisfy_rate:element.foods.satisfy_rate,

            }])
        })
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});