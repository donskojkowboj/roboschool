const body = document.body,
      openBurgerBtn = document.querySelector('#open-burger-btn'),
      closeBurgerBtn = document.querySelector('#close-burger-btn'),
      menuList = document.querySelector('#menu-list'),
      menuLinks = document.querySelectorAll('.menu__list_item a');
        
function enableScroll() {
    body.classList.remove('no-scroll');
};
function disableScroll() {
    body.classList.add('no-scroll');
};

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.style.visibility = 'hidden';
        closeBurgerBtn.classList.add('display-none');
        openBurgerBtn.classList.remove('display-none');
        enableScroll();
    });
});

openBurgerBtn.addEventListener('click', () => {
    openBurgerBtn.classList.add('display-none');
    closeBurgerBtn.classList.remove('display-none');
    menuList.style.visibility = 'visible';
    disableScroll();
});

closeBurgerBtn.addEventListener('click', () => {
    openBurgerBtn.classList.remove('display-none');
    closeBurgerBtn.classList.add('display-none');
    menuList.style.visibility = 'hidden';
    enableScroll();
});


