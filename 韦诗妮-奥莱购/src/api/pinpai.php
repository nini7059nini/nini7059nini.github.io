<?php

  include 'conn.php';
  $conn->set_charset('utf8');


//2.写语句，执行语句

$sql='SELECT * FROM pinpaiImg';//good为自己的数据名

//执行语句
$res=$conn->query($sql);//$res 是一个结果集

// var_dump($res);
//提取结果集里面的数据部分
$arr=$res->fetch_all(MYSQLI_ASSOC);//数组 [{},{},{}]
    // var_dump($arr); 

//把数据传给前端  对象->字符串 因为一个接口只能有一个打印输出
echo json_encode($arr,JSON_UNESCAPED_UNICODE);


//3.关闭数据库
$res->close();
$conn->close();


?>