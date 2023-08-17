let dropdown = document.querySelector('.dropdown');
const dropcont = document.querySelector('.dropcont');

function show() {
    dropdown.classList.toggle('active');
}


let sections = document.querySelectorAll('.sec');
let sectionPositions = Array.from(sections).map(sec => {
    const rect = sec.getBoundingClientRect();
    return {
        element: sec,
        offsetTop: rect.top + window.pageYOffset,
        offsetBottom: rect.bottom + window.pageYOffset
    };
});

function handleScroll() {
    const scrollPosition = window.scrollY + (window.innerHeight * 0.6);

    sectionPositions.forEach(({ element, offsetTop, offsetBottom }) => {
        const isVisible = scrollPosition >= offsetTop && scrollPosition < offsetBottom;

        if (isVisible && !element.classList.contains('show-animate')) {
            element.classList.add('show-animate');
        } else if (!isVisible && element.classList.contains('show-animate')) {
            element.classList.remove('show-animate');
        }
    });
}

// Add the event listener for scrolling
window.addEventListener('scroll', handleScroll);


window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar-container-flexible');
    const firstsection = document.getElementById('s1');
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= navbarHeight) {
        navbar.classList.add('sticky');
      
        
    } else {
        navbar.classList.remove('sticky');
        firstsection.style.paddingTop ="0px";
    }
});








const sect = document.querySelectorAll('.animated-sections');

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







