
const myfunction=(arr)=>{

    let  max=arr[0];

for(i=1;i<arr.length;i++){
 
    if(arr[i]<max){
          max=arr[i]
    }
 
}
console.log(max);

    
}


myfunction([3,3,4,5,6,9])