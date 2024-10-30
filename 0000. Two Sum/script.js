let num=[1,2,3,4]
let target=3;

 

var twoSum=function(num,target){
// Brute force
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            
           if(num[i]+num[j]===target)
             return [i,j]; 
           
     }
}
    }
    
  
    console.log(twoSum(num,target)); 
    



// if(element==target){
//     console.log();
    
// }else{
//     console.log(element);
    
// }