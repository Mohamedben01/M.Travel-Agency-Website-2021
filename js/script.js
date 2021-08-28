
/* Search Form Script */
const searchIcon = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");
const close = document.querySelector("#close");
searchIcon.onclick =()=>{
    searchForm.classList.add("active");
}
close.onclick=()=>{
    searchForm.classList.remove("active");
}

/* Menu Btn */
const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector("header .navbar");
menuBtn.onclick=()=>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

/* Login form */
const userIcon = document.querySelector("#user");
const loginForm = document.querySelector(".login-form");
const closeLogin = document.querySelector("#closeLogin");
userIcon.onclick=()=>{
  loginForm.classList.add('active');
}
closeLogin.onclick=()=>{
  loginForm.classList.remove('active');
}
/*Reviews slider*/

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*Scroll To Top */
const scrollElement = document.querySelector(".scroll-btn-up");
window.addEventListener("scroll",()=>{
  scrollElement.style.display = "block";
  window.pageYOffset>300
  ?(scrollElement.style.display = "block")
  :(scrollElement.style.display = "none");
});

scrollElement.addEventListener("click",()=>{
  window.scrollTo({top:0});
});

/*Loader Script*/
const word = document.querySelector(".loader-box h2 #word");
const loaderPage = document.querySelector(".loader-box");

const colors = ['#FF0066','#22d1ee','#faee1c','#f3558e','#17b978','#ac3f21'];
colors.forEach((clr, i) => {
   setTimeout(() => {
     word.style.color = clr;
   }, i * 1000);
});

function loader(){
  loaderPage.classList.add("hide");
}
function hide(){
  setInterval(loader, 3000);
}
window.onload = hide;
