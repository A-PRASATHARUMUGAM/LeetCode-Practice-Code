import React, { useState } from 'react'; 
import React_Styles from './React_Styles';
import React_clickEvents from './React_clickEvents'; 
import React_useState from './React_useState';
import React_List_and_Keys from './React_List_and_Keys';

function App() {


let [changename,setchangename]=useState("ddd");

 function handleclick(){
    let arr=['Earn','Grow','Give'];
    let result=Math.floor(Math.random()*arr.length);
    let finalresult=arr[result] 
    setchangename(finalresult) 
 
 }
           
    
  return (

    <div className="App-component ">
 

      <header className="App-header ">

        <h1> Practice React to <span>{changename}</span> Money</h1>

        <button onClick={handleclick}>Click</button>
        
      </header>




        <React.StrictMode>

          <React_Styles />
          <React_clickEvents/> 
          <React_useState />
          <React_List_and_Keys />


        </React.StrictMode>
    
    </div>


  );
}

export default App;
