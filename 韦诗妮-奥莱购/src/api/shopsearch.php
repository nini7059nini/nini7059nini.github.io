<?php
$servername = 'localhost';//主机
$username = 'root';//登陆数据库用户名
$password = 'root';
$dbname = 'aolaigou';
header("Content-type:text/html;charset=utf-8");

$conn = new mysqli($servername,$username,$password,$dbname);

// var_dump($conn); 
//php里面获取对象属性和方法：$conn->属性名  $conn->方法名(); js的写法：arr.lenght arr.push()

if($conn->connect_error) {
    //证明连接失败
    die("连接失败: " . $conn->connect_error);
}else{
    // echo '连接成功';
}

$idarr = isset($_REQUEST['idarr']) ? $_REQUEST['idarr'] :'';

$idarr = explode(',',$idarr);//把从前端传过来的被ajax转换后的成字符串的数组在后端重新转成数组再使用

$newarr = array();

forEach($idarr as $item){
    $sql = "SELECT * FROM liebiao WHERE id IN($item)";

    $res = $conn->query($sql);

    // var_dump($res);
    if($res->num_rows){
        $arr = $res->fetch_all(MYSQLI_ASSOC);

        array_push($newarr,$arr);
    }

};
echo json_encode($newarr,JSON_UNESCAPED_UNICODE);

?>