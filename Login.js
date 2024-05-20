
let center=document.getElementById('centerdiv');
let already=document.getElementById('alreadylogin');
let exit=document.getElementById('exit');
let sign_up=document.getElementById('signup');
let right=document.getElementById('right-box');
let exit2=document.getElementById('exit2');
right.style.display = 'none';
center.style.display='none';
already.addEventListener('click', function () {
/* body... */
center.style.display="block";
})
exit.addEventListener('click',function () {
/* body... */
center.style.display = `none`;
})
sign_up.addEventListener('click',function(){
right.style.display='block';
})
exit2.addEventListener('click',function(){
right.style.display = 'none';
})

let Name=document.getElementById('name');
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let sign=document.getElementById('sign');
let form=document.getElementById('form');
let submit=document.getElementById("submit");

sign.addEventListener("click",function (e) {
    e.preventDefault();
/* body... */
let nametxt=Name.value;
let usernametxt=username.value;
let emailtxt=email.value;
let passwordtxt =password.value;

localStorage.setItem("email", emailtxt);
localStorage.setItem("password", passwordtxt);


if((passwordtxt&&usernametxt&&emailtxt&&nametxt)==''){
alert('please enter all details');
}
else{
confirm(`Hello ! ${nametxt} Your username is : ${usernametxt} and Password is : ${passwordtxt} `);
alert(`Successfully ! Sign Up`);
}


})

submit.addEventListener("click", function(e){
    e.preventDefault();
    let email=document.getElementById('signemail');
    let password= document.getElementById("signpassword");
console.log(email.value, password.value);

    if(localStorage.email==email.value  && localStorage.password == password.value){
        alert("Loged In successfully")
    }else{
        alert("Please enter correct credentials")
    }
})
