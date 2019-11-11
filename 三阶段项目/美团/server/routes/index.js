var express = require('express');
var router = express.Router();
const {find,insert}=require('../db/db');
/* GET home page. */
router.get('/grid', async function(req, res, next) {
  res.append('Access-Control-Allow-Origin','*');
  let data=await find('grid');
  res.json(data);
});

router.get('/card', async function(req, res, next) {
  //后端从数据库拿数据  再交给前端
  //解决跨域问题
  res.append('Access-Control-Allow-Origin','*');
  let data=await find('card');
  res.json(data);

});
router.get('/movie', async function(req, res, next) {
  //后端从数据库拿数据  再交给前端
  //解决跨域问题
  res.append('Access-Control-Allow-Origin','*');
  let data=await find('movie');
  res.json(data);

});
router.get('/movie2', async function(req, res, next) {
  //后端从数据库拿数据  再交给前端
  //解决跨域问题
  res.append('Access-Control-Allow-Origin','*');
  let data=await find('movie2');
  res.json(data);

});
router.get('/list', async function(req, res, next) {
  //后端从数据库拿数据  再交给前端
  //解决跨域问题
  res.append('Access-Control-Allow-Origin','*');
  let data=await find('list');
  res.json(data);

});
router.get('/getitem', async function(req, res, next) {
  //后端从数据库拿数据  再交给前端
  //解决跨域问题
  res.append('Access-Control-Allow-Origin','*');
  //从数据库拿数据 发送给前端
  let data=await find('card',req.query);
  console.log(data)
  res.json(data);
});

router.post('/login',async function(req,res,next){
  res.append('Access-Control-Allow-Origin','*');
  // console.log(req.body)
  let data=await find('login',req.body); //body:数据在请求体里   query：数据在网址中
  console.log(data)
  if(data.length!=1){ //判断 前端传来的值与数据库中的值一样则返回 true  否则返回 false
    res.send('false'); 
    await insert('login',[{...req.body}]); //需要用数组装 原来的数据是对象所以需要解构
  }else{
    res.send('true')
  }
})
module.exports = router;
