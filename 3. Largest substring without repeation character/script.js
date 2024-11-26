
s=prompt("Enter the largest string");
let largestString=function(val){
                
   let set=new Set()
   let arr=[]
  for(sdata of val){ 
      set.add(sdata)
    }
    for(result of set.keys()){
        arr.push(result)   
    }
    console.log(arr.length);
} 

largestString(s) 

