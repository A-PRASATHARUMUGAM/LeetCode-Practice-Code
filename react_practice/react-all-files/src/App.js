import React from 'react'; 
import React_Styles from './React_Styles';
import React_ClickEvents from './React_clickEvents'; 

function App() {

  function handlefunction(){
    let arr=['Earn','Grow','Give'];
      let result=Math.floor(Math.random()*arr.length);
      return arr[result] 
  }

 
           
    
  return (

    <div className="App-component ">
 

      <header className="App-header ">

        <h1> Practice React to <span>{handlefunction()}</span> Money</h1>
        
      </header>




        <React.StrictMode>

          <React_Styles />
          <React_ClickEvents/>


        </React.StrictMode>
    
    </div>


  );
}

export default App;
