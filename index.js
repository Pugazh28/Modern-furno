let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
   navbar.classList.toggle('active');
   menu.classList.toggle('move');
   cart.classList.remove('active');
   user.classList.remove('active');
}
//cart toggles
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
   cart.classList.toggle('active');
   navbar.classList.remove('active');
   menu.classList.remove('move');
   user.classList.remove('active');
}
//user toggle
let user = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () => {
   user.classList.toggle('active');
   cart.classList.remove('active');
   navbar.classList.remove('active');
   menu.classList.remove('move');
}
//to add shodow ana on scroll background
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
   header.classList.toggle('active',window.scrollY > 0);
});
//scroll top
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll',() => {
   scrolltop.classList.toggle('active',window.scrollY > 0);
});
//on click on menu links to remove menu
window.onscroll = () =>{
   navbar.classList.remove('active');
   menu.classList.remove('move');
}