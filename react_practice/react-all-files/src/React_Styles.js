import React from 'react'

       let handlestyles={
           color:"blue"

       }


const React_Styles = () => {
  return (
      <div className='React-styles' >


        <h1>Styles in React</h1>

        {/* Inline Style  */}
        <h2 style={{color:"red"}}>Inline Style </h2>
        <h2 style={handlestyles}>Inline Style 2 Using variable </h2>

        {/* External style */}
        <h2 className='external-style'>External Style</h2>

    </div>
  )
}

export default React_Styles