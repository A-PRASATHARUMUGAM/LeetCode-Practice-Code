import './App.css';

function app() {

  let array=["Earn","Grow","Give"]   
  let result="";
  for(let i=0;i<array.length; i++){
    let rand=Math.floor(Math.random()*array.length);
    result=array[rand];
    
  }

      
  
  return (
   <div className="app">
    <h1>Let's {result} Money</h1>

   </div> 


  );



}

export default app;
