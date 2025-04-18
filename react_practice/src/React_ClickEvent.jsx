import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

const React_ClickEvent = () => {

    // Type 1 - Normal 
const handleClick =()=>{
        console.log("click 1"); 
        
    }



    // Type 2  - Parameter Passing 
const handleClick2 =(fname)=>{
        console.log(`click 2 ${fname}`); 
        
    }



  return (
    <div className='react-clickevent-container'>


        <h1>React Click Events</h1>


        {/* Type 1 - Normal */}
        <button className='rcbutton' onClick={handleClick}>Click 1</button>

    
        {/* Type 2  - Parameter Passing */} 
        <button className='rcbutton'  onClick={() => handleClick2("Prasath")}>Click 2</button>

                    
 

    </div>
  )
}

export default React_ClickEvent