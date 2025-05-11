import React from 'react'

const React_clickEvents = () => {

  // Handle click Events
   let handleClick=(e)=>{
     e.target.classList.toggle('clickstyle');

 
   }
  
  



  return (
    <div className='react-clickevents major-style'>
             <h1>React ClickEvents </h1>
         <button className='h' onClick={(e)=>handleClick(e)} >Click Me</button>
    </div>
  ) 
}

export default React_clickEvents  