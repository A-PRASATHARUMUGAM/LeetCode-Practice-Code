import React from 'react';
import React_Styles from './React_Styles';
import Header from './Header'; 
import Navbar from './Navbar'; 

function App() {

  function handlefunction(){
    let arr=['Earn','Grow','Give'];
      let result=Math.floor(Math.random()*arr.length);
      return arr[result] 
  }

 
           
    
  return (

    <div className="App-component ">
 

      <header className="App-header">

        <h1> {handlefunction()} Money</h1>
        
      </header>




        <React.StrictMode>
          <React_Styles />
          <Header/>
          <Navbar/>
        </React.StrictMode>
    
    </div>


  );
}

export default App;
