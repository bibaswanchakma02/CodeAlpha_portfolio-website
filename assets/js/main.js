/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    mobile_nav.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobile_nav.classList.remove("active");
    }))


/* STICKY NAVBAR */
const navbar = document.getElementById("nav-bar");
const menu = document.getElementById("menu");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}
