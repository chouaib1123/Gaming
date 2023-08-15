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
