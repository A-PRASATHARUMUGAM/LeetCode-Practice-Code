<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){

 $id=$_POST['id'];
 $name=$_POST['name'];
 $email=$_POST['email'];
 $gender=$_POST['gender'];
 $address=$_POST['address'];


 echo("Id : $id <br>" );
 echo("name : $name <br>" );
 echo("email : $email <br>" );
 echo("gender : $gender <br>" );
 echo("address : $address <br>" ); 
} else{

    echo "Your are accessing wrong data ";
}


// mysqli_connect('host','username','password','dbname');

// Type -1 
// $con = mysqli_connect('localhost','root','','test');  

// if(!$con){

//   die('connection error '. mysqli_connect_error());   


// }else{

//     echo "connect successed";
// }


// Type -2 
$con =new mysqli('localhost','root','','test');  

if($con->connect_error){

  die('connection error '. $con->connect_error);    


}else{

    echo "connect successed";
}


?>