function signIn(){

   let menu = document.querySelector(".menu");
    menu.style.display="none";
    let formD = document.querySelector(".logIn");
    formD.style.display="block";
}
function Close(){
    let formD = document.querySelector(".logIn");
    formD.style.display="none";
}
function CloseSignUp(){
    let formD = document.querySelector(".sign-up");
    formD.style.display="none";
}
// menu-btn

function Menu(){
    let formD = document.querySelector(".logIn");
    formD.style.display="none";
    let menu = document.querySelector(".menu");
    menu.style.display="block";
}
function MenuClose(){
    let menu = document.querySelector(".menu");
    menu.style.display="none";
}
function searchBar(){
    document.getElementById("inp").style.display="block";
}
function closeBar(){
    document.getElementById("inp").style.display="none";
}

//slide bar
let slide=document.querySelectorAll(".customer");
var count=0;
let customer = document.querySelector(".customer");
// console.log(slide);
slide.forEach(function(customer, index){
    customer.style.left=`${index*100}%`;
    
})

function bar(){
    slide.forEach(function(customer){
        customer.style.transform= `translateX(-${count*100}%)`;
    })
}
function next(){
    count++;
    
    if(count==slide.length){
        count=0;
    }
    bar();
    console.log(bar());
}
function pre(){
    count--;
    if(count==-1){
        count=slide.length-1;
    }
    bar();
    console.log(count);
}

// sign-in
function SignInbtnClick(){
    document.getElementById("login").style.display="block";
  }
function SignUpbtnClick(){
    document.getElementById("login").style.display="none";
  document.getElementById("sign-up").style.display="block";
}
