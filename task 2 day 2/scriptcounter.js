/*const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const resetButton = document.getElementById('reset');
const count = document.getElementById('count');
incrementButton.addEventListener('click',()=>{
    count.innerHTML = parseInt(count.innerHTML)+1;
});
decrementButton.addEventListener('click',()=>{
    count.innerHTML = parseInt(count.innerHTML)-1;  
});
//event handling
resetButton.addEventListener('click',()=>{
    count.innerHTML = 0;
});
**/

const name = document.getElementById('name');
const password = document.getElementById('password');
const btn = document.getElementById('button');
const error = document.getElementById('error');
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    // if(name.value.length==0){
    //     error.innerHTML = "Name cannot be empty";
    // }
    // else{
    //     error.innerHTML = "";
    // }
    
    if(name.value==password.value && name.value.length!=0 && password.value.length!=0){
        error.style.color = "green";
        error.innerHTML = "Login Successful";
    }
    else{
        error.innerHTML = "Login Failed";
    }
})