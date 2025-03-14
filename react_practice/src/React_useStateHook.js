import React from 'react'
   
// first - 1
// Hook import to " curley brasses "
import { useState } from 'react' 



const React_useStateHook=()=>{

       // Third - 3
    /* name  -> open website stage  */
    /* setName  -> use to change  website stage  */
    const [name,setName]=useState("change name");




    // second - 2
    const myfunction =()=>{
        
        let array=["prasath","vignesh","sabari"];
        let rand=Math.floor(Math.random()*array.length);
        setName(array[rand]); 
    
    }

    
    
    return(
            <div className="react-userstate-container">
                <h1>React useState Hook</h1>


 
                {/* fourth - 4 */}
                <p>Hello {name} </p> 
                <button onClick={()=>myfunction()}>Click</button> 

            </div>

 

    )


}
export default React_useStateHook