<?php
  include 'conn.php';
  header("Content-type:text/html;charset=utf-8");

  //验证用户名是否存在

  $iname = isset($_REQUEST['iname']) ? $_REQUEST['iname'] : '';

  //sql语句
   $sql = "SELECT * FROM userinf WHERE idname='$iname'";

   //执行语句
   $res=$conn->query($sql);
  //  var_dump($res);

    //通过行数来判断是否已经登录
      if($res->num_rows){
        //查找到，不能注册
        echo 'no';
    }else{
      echo 'yes';
    }
  ?>
