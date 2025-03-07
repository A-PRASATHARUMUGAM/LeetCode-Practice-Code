import './App.css';

function app() {

  const array=["Earn","Grow","Give"]   
   
  for(val of array ){

    console.log(val);
    
  }
   
  return (
   <div className="app">
    <h1>Let's {array} Money</h1>

   </div>
  );
}

export default app;
