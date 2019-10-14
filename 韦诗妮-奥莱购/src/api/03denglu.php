<?php
 include 'conn.php';
 header("Content-type:text/html;charset=utf-8");

 //注册功能
 $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
 $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

 //sql语句
 $sql="SELECT *FROM userinf WHERE idname='$name ' AND psw='$password'";

 //执行语句
 $res=$conn->query($sql);
//  var_dump($res)

if($res->num_rows){
    //登录成功 已登录
    echo 'yes';
}else{
    // 登录失败 未登录
    echo 'no';

}

/*
        select : 返回结果集
        insert、update、delete：返回布尔值
*/

?>