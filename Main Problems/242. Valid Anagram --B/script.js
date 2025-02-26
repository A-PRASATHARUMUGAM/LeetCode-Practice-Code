let s=prompt("1")
let t=prompt("2")
let i=0;

let data=new Map()

const myfunction =function(){
    if(s.length !=t.length){
        return false
    }
    for(let sdata of s){ 
        data.set(sdata,i);
        i++  
   }
    for(let tdata of t){  
         if(data.has(tdata)){ 
         return true 
         }else{
          return  false 
         }
      }
} 
let functionData=myfunction()
console.log(functionData);





