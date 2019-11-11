const https = require('https');
//引入db.js中增的写法
const { insert } = require('./db');
https.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.12908&longitude=113.264359&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        //拿数据
        let card = JSON.parse(rawData).items;
        console.log(card);
        card.forEach(element => {  //每个遍历的对象：element
            //插入到数据库中
             insert('card',[{
                 name:element.restaurant.name,
                 next_business_time:element.restaurant.next_business_time,
                 promotion_info:element.restaurant.promotion_info,
                 distance:element.restaurant.distance,
                 recent_order_num:element.restaurant. recent_order_num,
                 rating:element.restaurant.rating,
                 rating_count:element.restaurant.rating_count,
                 description:element.restaurant.description,
                 image_path:element.restaurant.image_path
             }])
        })
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});