import React_Style from './React_Styles';
import React_ClickEvent from './React_ClickEvent';
import React_useStateHook from './React_useStateHook';
import Header from './Header'; 
import Content from './Content';
import Footer from './Footer';

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
  


    <React_Style/>
    <React_ClickEvent />
    <React_useStateHook />
    <Header/>
    <Content/>
    <Footer/>


   </div> 


  );



}

export default app;
