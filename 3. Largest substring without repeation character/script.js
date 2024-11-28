                    // Type - 1 Solved 
// s=prompt("Enter the largest string");
// let largestString=function(val){
                
//    let set=new Set()
//    let arr=[]
//   for(sdata of val){ 
//       set.add(sdata)
//     }
//     for(result of set.keys()){
//         arr.push(result)   
//     }
//     console.log(arr.length);
// } 

// largestString(s) 


                // Type - 2 Optimize
const  sdata="abcacdcdc"
let set=new Set()
for( val of sdata ){
     set.add(val)
    
}

let arr=Array.from(set) 
console.log(arr.length);

