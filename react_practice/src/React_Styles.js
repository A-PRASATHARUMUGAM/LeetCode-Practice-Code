import React from 'react'

// External style
import "./index.css";


const React_Styles = () => {

// variable to declare style 
const internalstyle={ color:"red"} 

  return (

    <div className="style-main-container">
      <h1> Styles In React</h1>


    {/* variable to declare style   */}
      <h3 style={internalstyle}>Internal Style</h3>

      
    {/* Inline style  */}
      <h3 style={{color:"blue"}} >Inline Style</h3>
      
      
      
      </div>
  )
}

export default React_Styles