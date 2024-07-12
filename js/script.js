const elMenu = document.querySelector(".site-header-action"),
    elBurgerMenu = document.querySelector(".burger-menu");

    if(elBurgerMenu) {
        elBurgerMenu.addEventListener("click", ()=> {
            elMenu.classList.toggle("open");
        })
    }