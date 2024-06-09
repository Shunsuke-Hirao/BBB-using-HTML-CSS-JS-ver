let toggle=document.querySelector(".toggle-btn");
let nav=document.querySelector("#navlist");

toggle.addEventListener("click",()=>{
    nav.classList.toggle("open");
})