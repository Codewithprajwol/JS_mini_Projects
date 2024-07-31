//form validation code
//we are going to use regix for Validation
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const submit=document.querySelector("#log")
const emailErr=document.querySelector('.email-err')
const PassErr=document.querySelector('.password-error')
const form=document.querySelector('.login-container')

const emailRegix=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PasswordRegix=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

submit.addEventListener('click',(e)=>{
     if(!emailRegix.test(email.value)){
        emailErr.innerText="please input an valid email";
     }
     else {
        emailErr.innerText = ""; 
     }
     if(!PasswordRegix.test(password.value)){
        PassErr.innerText="password should include capital letters,number and special characters"
     }
})
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
// })