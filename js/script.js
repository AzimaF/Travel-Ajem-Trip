// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika navbar menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// untuk munculin searchform
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};


// klik diluar sidebar umtuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
const searchbutton = document.querySelector("#search-button");

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }

    if (!searchbutton.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove("active");
      }
      
});
