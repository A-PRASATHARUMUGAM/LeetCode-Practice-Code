document.addEventListener("DOMContentLoaded",()=>{

    const personStatus=document.querySelector(".status-para");
    const approveButton=document.querySelector(".employee-details-approve-btn")
    let  rejectButton=document.querySelector(".employee-details-reject-btn");
    
    
    
    
    
    
    
    
    // Approve button process
    function employeeApproveButton(){
    
        
        approveButton.addEventListener('click',()=>{
            
            let check=confirm("Are sure to Approved")
        if(check){
    
            personStatus.classList.add("status-para-approve")
            personStatus.innerText = "Status: Approved";
        }
    
        approveButton.disabled = true;
    
            
       })
    
       
        
        
    } 
    
    employeeApproveButton();
    
    
    
    // Reject button process
    
    function  employeeRejectButton(){ 
     
    
        rejectButton.addEventListener('click',()=>{
            
            let check=confirm("Are sure to Rejected")
        if(check){
    
            personStatus.classList.add("status-para-reject")
            personStatus.innerText = "Status: Rejected";
        }
    
        rejectButton.disabled = true;
    
            
       })
    
        
    }
    
    employeeRejectButton()
    
    
    
    
    const rejectButtonAll=document.querySelectorAll(".employee-details-reject-btn");
    
    
    rejectButtonAll.forEach((rejectbuttons)=>{
    
        console.log(rejectbuttons);
        
    }) 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // DOMContentLoaded
    });
    