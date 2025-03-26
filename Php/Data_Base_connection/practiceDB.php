
<?php




// Data Base connection Function 

// mysqli_connect();           --> connect DB
// mysqli_connect_error();    --> throw DB error 
// die -->once run the program is terminate link break

//$_SERVER["REQUEST_METHOD"] 
// mysqli_query


// mysqli_connect("host","username","password","DBname");


 
// Type - 1  Data Base connection Function 

// $con=mysqli_connect("localhost","root","","test"); 

 
// if(!$con){
//     die('connection error ' .mysqli_connect_error());
// }else{
//     echo "connnection  Success";
// }

// Type - 2  Data Base connection Function 

$con = new mysqli("localhost","root","","prasathdb");

if($con->connect_error){

        die("connection error ".$con->connect_error);

        
}


if(isset($_POST['submit'])){


    $name=$_POST["name"];



$query=mysqli_query($con, "INSERT INTO prasathdatabase (name)VALUES('$name')");

if($query){
    echo "success";
}else{
    echo "fail";
}



}

$query2= mysqli_query("SELECT name,email FROM prasathdatabase");


echo "$query2";








?>
