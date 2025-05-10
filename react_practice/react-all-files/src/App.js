import React from 'react';
import Header from './Header'; 
import Navbar from './Navbar'; 


function App() {

  
  return (

    <div className="App-component ">


      <header className="App-header">

        <h1>App Component</h1>
        
      </header>




        <React.StrictMode>
          <Header/>
            <Navbar/>
        </React.StrictMode>
    
    </div>


  );
}

export default App;
