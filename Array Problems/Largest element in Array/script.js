let array=[1,2,3,4,5];

const myfunction = ()=>{
let max=array[0]
    
    for(i=0;i<array.length;i++){
     
        if( array[i] > max){ 
 
                max=array[i]
        } 
                

    }
    
    
    console.log(max);
}

myfunction()
