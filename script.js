window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px -200px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);


    const left = document.querySelectorAll('.left');
    left.forEach(p => observer.observe(p));

    const right = document.querySelectorAll('.right');
    right.forEach(p => observer.observe(p));

    const links = document.querySelectorAll('.link'); 
    links.forEach(p => observer.observe(p));
}