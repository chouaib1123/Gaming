//sticky navbar concept
window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar-container-flexible');
    const firstsection = document.querySelector('.topic');
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= navbarHeight) {
        navbar.classList.add('sticky');
        firstsection.classList.add('understicky');
        
    } else {
        navbar.classList.remove('sticky');
        firstsection.classList.remove('understicky');
    }
});


//sections aniimation
const sect = document.querySelectorAll('.animated-section');

function checkSections() {
  sect.forEach((section, index) => {
    const bounding = section.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      section.classList.add('translate-animation');
    } else {
      section.classList.remove('translate-animation');
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('resize', checkSections);
checkSections();








//dropdown concept
function dropdown_control(){
    const dropdown = document.querySelector(".nav-items");
    if(dropdown.classList.contains("dropable") ){
        dropdown.classList.remove("dropable");
    }
    else{
        dropdown.classList.add("dropable");
    }
    
}
function handleClickOutside(event) {
    const dropdown = document.querySelector(".nav-items");
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("dropable");
    }
}
document.addEventListener("click", handleClickOutside);






function Sidebare(){
  const sidebarre = document.querySelector(".phone-effect");
  if(sidebarre.classList.contains("sideable") ){
    sidebarre.classList.remove("sideable");
  }
  else{
    sidebarre.classList.add("sideable");
  }
  
}
function sidebarreClickOutside(event) {
  const sidebarre = document.querySelector(".phone-effect");
  if (!sidebarre.contains(event.target)) {
    sidebarre.classList.remove("sideable");
  }
}
document.addEventListener("click", sidebarreClickOutside);

