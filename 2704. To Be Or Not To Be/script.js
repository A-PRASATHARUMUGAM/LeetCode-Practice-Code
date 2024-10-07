const expect=(val1)=>{

let  toBe=function(val2){
    try{

        if(val1==val2){
            console.log("true") 
        }
        else{
            throw("Not Equal")
        }    
    }
    catch(error){
            console.log(error)
    }
   return toBe
}
let  notToBe=function(val3){
    try{

            if(val1!==val3){
              value=true
            }
            else{
                throw("Equal")
            }    
    }
    catch(error){
            value=error
    }
   
}

}
expect(12).toBe(10)
