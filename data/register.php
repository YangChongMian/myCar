<?php

header('Content-Type:application/json;charset=utf8');

@$uname = $_REQUEST['uname'] or die('{"code":-2,"msg":"用户名是必须的"}');
@$upwd =  $_REQUEST['upwd'] or die('{"code":-3,"msg":"用户密码是必须的"}');
@$sex =  $_REQUEST['sex'] or die('{"code":-4,"msg":"用户性别是必须的"}');
@$age =  $_REQUEST['age'] or die('{"code":-5,"msg":"用户年龄是必须的"}');
@$car =  $_REQUEST['car'] or die('{"code":-6,"msg":"您喜欢的车是必须的"}');

$conn = mysqli_connect("127.0.0.1","root","","car");
        mysqli_query($conn,"SET NAMES UTF8");

$sql = "INSERT INTO user_car VALUES(null,'$uname','$upwd','$sex',$age,'$car')";

$result = mysqli_query($conn,$sql);

if($result===true){
    echo '{"code":1,"msg":"注册成功"}';
}else{
    echo '{"code":-1,"msg":"注册失败"}';
}

?>