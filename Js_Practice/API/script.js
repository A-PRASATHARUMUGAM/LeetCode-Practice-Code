const apidata=document.querySelector('.testapi');

 fetch("https://jsonplaceholder.typicode.com/todos")
 .then((res)=>res.json())
 .then((msg)=>{
        let data=[]
        for(let i=0;i<msg.length;i++){

            data.push(msg[i].title)
        }
        apidata.innerHTML=`<h4>${data}</h4>`
        
})
.catch((err)=>err);

     







