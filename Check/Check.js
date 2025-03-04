console.log("hello world");


let array=[1,2,3,4,5];

let result=0;
for(val of array){

    result+=val;
}
console.log(result);

let result2=0



for(i=0;i<array.length;i++){
 
    result2=array[i] 

}
console.log(result);

//---------------------------->

let Fname="prasath";
let output="";

for(val of Fname){

   output+=val;

}
console.log(output); 


let button=document.querySelector('.close-btn');
let itemList=document.querySelector('.item-list'); 



button=document.addEventListener('click',()=>{
 
  itemList.classList.toggle("showmenu")
})
