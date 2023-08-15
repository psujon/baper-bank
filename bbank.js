//get login button click

document.getElementById('submitbtn').addEventListener('click',function(){
    //get email value
    const emailFIeld = document.getElementById('email')
    const email = emailFIeld.value;
    // console.log(email)
    const passFIeld = document.getElementById('password')
    const pass = passFIeld.value;
    // console.log(pass)


    if(email === "sujon@mail.com" && pass === "sujon"){
        location.href="bank-dashboard.html";        
    } else{
        alert("You can't access to the baper bank. Please check your email or password!");
        emailFIeld.innerText ="";
        passFIeld.innerText="";
    }
})

// deposit amount

