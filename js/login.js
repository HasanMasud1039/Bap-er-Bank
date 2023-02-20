//step 1: add eventlistener in submit btn
document.getElementById('btn-submit').addEventListener('click', function(){

    //step 2: get user email id
    //always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //step 3:: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER:: Do not verify email password on the client side

    //step 4:: verify email password
    if(email === 'hi@hi.hi' && password === 'hihihi'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid user');
    }
})