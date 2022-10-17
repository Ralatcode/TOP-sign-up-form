const errorMsg = document.querySelector('.error-msg');
let check = () => {
    if (document.querySelector('#password').value ==
    document.querySelector('#confirm_password').value) {
        errorMsg.innerHTML = 'Password Match';
        errorMsg.style.color = 'green';
    } else {
        errorMsg.innerHTML = 'Password does not match';
        errorMsg.style.color = 'red';    
    }
};