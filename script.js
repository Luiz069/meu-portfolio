// ================================
// MENU MOBILE
// ================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (menu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Fecha o menu quando clicar em um link

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================================
// HEADER AO ROLAR
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ================================
// ANO AUTOMÁTICO
// ================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================================
// LINK DO PROJETO
// ================================

// Substitua pelo endereço real
// do seu projeto da lanchonete.

const projectLink = document.getElementById("projectLink");

projectLink.addEventListener("click", (event) => {

    event.preventDefault();

    // Coloque aqui o endereço do projeto.
    const url = "https://churrasquinho.vercel.app/index.html";

    window.open(url, "_blank");

});


// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================

const elements = document.querySelectorAll(
    ".section-title, .about-text, .skill, .project-featured, .service-card, .contact-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});