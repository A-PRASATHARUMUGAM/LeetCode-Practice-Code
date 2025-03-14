import React from 'react'
   
// first - 1
// Hook import to " curley brasses "
import { useState } from 'react' 



const React_useStateHook=()=>{

   
    // second - 2
    const myfunction =()=>{
        
        let array=["prasath","vignesh","sabari"];
        let rand=Math.floor(Math.random()*array.length);
        return array[rand]; 
        
        
    }
    // Third - 3
    /* name  -> open website stage  */
    /* setName  -> use to change  website stage  */
    const [name,setName]=useState("change name");
    
    


    //fourth - 4
    const  handleClick=()=>{ 
        setName(myfunction())
      }
 


    return(
            <div className="react-userstate-container">
                <h1>React useState Hook</h1>



                {/* fifth - 5 */}
                <p>Hello {name} </p> 
                <button onClick={()=>handleClick()}>Click</button> 

            </div>

 

    )


}
export default React_useStateHook