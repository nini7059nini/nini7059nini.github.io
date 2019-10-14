<?php
 include 'conn.php';
//  header("Content-type:text/html;charset=utf-8");

 //注册功能
 $idname = isset($_REQUEST['idname']) ? $_REQUEST['idname'] : 'aa111';
 $idpassword = isset($_REQUEST['idpassword']) ? $_REQUEST['idpassword'] : 'asdasd';

//  sql语句
 $sql="INSERT INTO userinf(idname,psw,shuju) VALUES('$idname','$idpassword','')";

 //执行语句
 $res=$conn->query($sql);
//  var_dump($res)

if($res){ //是否插入成功
    // echo 'yes';
    echo 'yes';
}else{
    echo 'no';

}
// echo $idname;

/*
        select : 返回结果集
        insert、update、delete：返回布尔值
*/

?>