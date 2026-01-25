document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll("[data-tab-button]");
    const tabLists = document.querySelectorAll("[data-tab-id]");
    const questions = document.querySelectorAll("[data-faq-question]");
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.clientHeight;

    window.addEventListener("scroll", function() {
        const currentPosition = window.scrollY;

        if (currentPosition < heroHeight) {
            hideHeaderOnScroll();
        }else {
            displayHeaderOnScroll();
        }
    });

    function hideHeaderOnScroll() {
        const header = document.querySelector(".header");
        header.classList.add("header--is-hidden");
    }

    function displayHeaderOnScroll() {
        const header = document.querySelector(".header");
        header.classList.remove("header--is-hidden");
    }

    // Seção de atrações, programação das abas
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetTab = this.getAttribute("data-tab-button");
            tabLists.forEach(list => {
                if (list.getAttribute("data-tab-id") === targetTab) {
                    list.style.display = "grid";
                } else {
                    list.style.display = "none";
                }       
            });
            tabButtons.forEach(btn => btn.classList.remove("shows__tabs__button--is-active"));
            this.classList.add("shows__tabs__button--is-active");
        });
    });

    // Seção FAQ, perguntas frequentes
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function() {
            const parent = this.parentNode;
            parent.classList.toggle("faq__questions__item--is-open");
            
        });
    }
});