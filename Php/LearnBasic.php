<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create a Dynamic API using PHP</title>
 </head>
 <body>

     <?php

$name="prasath";


echo "<h1>$name</h1>";

for($i=1;$i<=10;$i++){

 echo "Number $i <br> "; 

}
 
// conditon statement
if(10<12){ 
 echo true; 

}else{ 
    echo false;
}


// loop
$newarray= ["apple ","orange","mango"];

foreach($newarray as $val){

    echo "<br>",$val;  
} 
  

// array

echo "<br>", $newarray[2];


// Arry in string

$user =[

    "name"=>"prasath", 
    "age"=>25,
    "email"=>"prasatharumugam@gmail.com"

];

echo $user["name"];  


// Function in PHP
function myfunction($name){
    echo "<br>", $name;

};
myfunction("Kandhan"); 


// other Function in PHP

function myfunction2($name){
    return $name;

};
echo myfunction2("Kandhan"); 


// another print data
print myfunction("priya");


// quation print
print " <br> hello \"prasath\" ";
echo "hello \"kandhan\" "; 

//paranthises to use
echo("<br> hello priya");
print("hello Vignesh"); 

                // return something
                
// print();  return 1
// int print();  syntax

// echo ();  no return 
// void echo ();  syntax









?>
 



 </body>
 </html>
 