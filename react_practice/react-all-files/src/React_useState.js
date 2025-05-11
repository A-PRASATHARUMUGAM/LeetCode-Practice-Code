import React from 'react'
import { useState } from 'react'


const React_useState = () => {

        //Preffered Naming Conversion  
         let [count,setCount]=useState(99);
         
         
             function incfunction(){
               setCount(count+1);
             }

             function decfunction(){
               setCount(count-1);
             }

 
         
  return ( 
    <div className='react-usestate major-style'>
        <h1>React UseState</h1>

        <p>
          1. useState don't access to class Complonents <br/>
          2. useState don't access to Conditionally <br/>
          3. Don't put function directly name()  using Anonymous function to access because it is before execute the function<br/>
        </p> 


      <div>
         <button className='decbtn'onClick={decfunction}>-</button>
           <span className='count'>{count}</span>
         <button className='incbtn'onClick={incfunction}>+</button>
      </div>


    </div>
  )
}

export default React_useState