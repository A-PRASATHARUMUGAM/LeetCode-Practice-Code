
function footer() {

   const name="prasath"
   const arra=[1,2,3];
   const obj=new Date()




        //Hours
        let  date= obj.getDate();
        let  month= obj.getMonth();
        let year=obj.getFullYear();
        // Time
        let hours=obj.getHours();
        let minutes=obj.getMinutes();
        let seconds=obj.getSeconds();



 
  return (
   <div className="comment">
       <h1>Footer </h1>

       {/* Date */}
        <span>{date}</span>
        <span>/</span>
        <span>{month}</span>
        <span>/</span>
        <span>{year}</span>
<br />
        {/* Time */}
        <span>{hours}</span>
        <span>: </span>
        <span>{minutes}</span>
        <span>: </span>
        <span>{seconds}</span>
 

  
    




        <span>&copy;</span>
   </div>
  );
}

export default footer;
