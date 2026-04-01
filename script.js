document.addEventListener('DOMContentLoaded', () => {
    
   
    const sections = document.querySelectorAll('section');
    
    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
               
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });


    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = "rgba(240, 240, 240, 0.8)";
            header.style.backdropFilter = "blur(10px)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.background = "#f0f0f0";
            header.style.backdropFilter = "none";
            header.style.boxShadow = "none";
        }
    });
});
