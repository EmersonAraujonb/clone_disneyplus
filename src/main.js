document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll("[data-tab-button]");
    const tabLists = document.querySelectorAll("[data-tab-id]");

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
});