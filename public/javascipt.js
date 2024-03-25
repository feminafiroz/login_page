// const foams = document.getElementById('foam');
// const uss = document.getElementById('us');

//     function validateForm(e) {
//         console.log(3)
//         const us = uss.value.trim();
//         if (us === "") {
//             alert('Please fill in the username field.');
//             e.preventDefault(); 
//         }
//     }

function validateForm() {
    const usernameInput = document.getElementById('us');
    const passwordInput = document.getElementById('ps');
    const err1=document.getElementById('error1')
    const err2=document.getElementById('error2')
    let passInput = document.getElementById("ps");
    let userInputs = document.getElementById("us");
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (username === "") {
      userInputs.classList.add("is-invalid");
      const ans1="Username Required"
      err1.innerHTML=ans1;
      
      if(password ===""){
        passInput.classList.add("is-invalid");
        const ans2="password Require."
        err2.innerHTML=ans2;
        return false;
      }
      return false; 
    }else {
        userInputs.classList.add("is-valid");
        const ans1=""
        err1.innerHTML=ans1;
      }
  if(password ===""){
      passInput.classList.add("is-invalid");
      const ans2="password Require."
      err2.innerHTML=ans2;
      return false;
    }
    if(password.length<=2){
      passInput.classList.add("is-invalid");
      const a="Maximun 3 character"
      err2.innerHTML=a
      return false;
    }
     if(username=="femina"||password==123){
       // Additional client-side validation logic if needed
    passInput.classList.add("is-valid")
    userInputs.classList.add("is-valid")
    return true; // Allow form submission
     
    }else{
    passInput.classList.add("is-invalid");
      userInputs.classList.add("is-invalid");
      const ans2="check your password."
      const ans1="check your username"
      err1.innerHTML=ans1;
      err2.innerHTML=ans2;
      return false;
    }
  }
  