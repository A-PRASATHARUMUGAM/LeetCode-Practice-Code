let n=0o0111001;

let myfunction=function(){
    let count=0;
    for(let i=1;i<=32;i++){
          count+=n&1;
          n=n>>1
        
    } 
    console.log(count);
     
}
 
myfunction()