/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 800);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "UI/UX Designer",
    "Creative Thinker",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .timeline-item, .contact-content"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   PROJECT STAGGER ANIMATION
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.1}s`;

});


/* =====================================================
   SKILL STAGGER
===================================================== */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   MAGNETIC BUTTON EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(".btn, .nav-button");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0)";

    });

});


/* =====================================================
   PARALLAX HERO
===================================================== */

const profileCard =
    document.querySelector(".profile-card");

window.addEventListener("mousemove", (e) => {

    if (window.innerWidth > 900) {

        const x =
            (window.innerWidth / 2 - e.clientX) / 50;

        const y =
            (window.innerHeight / 2 - e.clientY) / 50;

        profileCard.style.transform =
            `rotate(4deg) translate(${x}px, ${y}px)`;

    }

});