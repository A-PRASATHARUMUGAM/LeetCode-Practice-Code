import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';
import './App.css';

function app() {
 
  let array=["Earn","Grow","Give"]   
  let result="";

setTimeout(() => {
  

  for(let i=0;i<array.length; i++){
    let rand=Math.floor(Math.random()*array.length);
    result=array[rand];
  }

}, 3000); 



  
  return (
   <div className="app">
    <h1>Let's {result} Money</h1>


    <Header/>
    <Content/>
    <Footer/>


   </div> 


  );



}

export default app;
