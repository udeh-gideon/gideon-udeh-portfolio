// Fade-in on-scroll
const fadeElements =  document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Back to Top button
const topBtn = document.getElementById('topBtn');
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// For the Skill-level section
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const skillFills = document.querySelectorAll(".skill-fill");

    const revealSkills = () => {
        skillFills.forEach(fill => {
            const percent = fill.getAttribute("data-percent");
            fill.style.width = percent + "%";
            setTimeout(() => {
                fill.querySelector(".skill-percent").style.opacity = 1;
            }, 1000);
        });
    };

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSkills();
                observer.disconnect();
            }
        });
    }, { threshold:0.4});

    skillsObserver.observe(skillsSection);
});

// For Contact form toast massage display

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "Message Sent Successfully!";
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 3000);
});