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

// daftar.js
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('search-button');
    const searchForm = document.getElementById('search-form');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        searchForm.classList.toggle('active');
    });
});


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

// JavaScript to control modal
document.addEventListener('DOMContentLoaded', function() {
  var signInButton = document.getElementById('akun');
  var modal = document.getElementById('modal-login');
  var closeButton = document.querySelector('.close');

  // Open modal when sign in button is clicked
  signInButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      modal.style.display = 'block';
  });

  // Close modal when close button is clicked
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close modal when clicked outside of modal content
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});

// menu login
const modal = document.getElementById("modal-login");
const loginBtn = document.querySelector(".navbar-extra #akun");
const closeBtn = document.querySelector(".close");

// Show the modal when the login button is clicked
loginBtn.onclick = function() {
    modal.style.display = "flex";
}

// Hide the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Hide the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("modal-login");

    // Get the button that opens the modal
    var btn = document.getElementById("akun");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});





