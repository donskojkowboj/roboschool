const body = document.body,
      openBurgerBtn = document.querySelector('#open-burger-btn'),
      closeBurgerBtn = document.querySelector('#close-burger-btn'),
      menuList = document.querySelector('#menu-list'),
      menuLinks = document.querySelectorAll('.menu-mobile__list_item a');
        

const enableScroll = () => {
    body.classList.remove('no-scroll');
};
const disableScroll = () => {
    body.classList.add('no-scroll');
};

menuList.style.visibility = 'hidden';
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


// menuList.style.visibility = 'visible';
// menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         menuList.style.visibility = 'visible';
//     });
// });


// function checkScreenSize() {
//     if (window.innerWidth >= 1025) {
//         runForLargeScreens();
//     } else {
//         runForSmallScreens();
//     }
// }

// checkScreenSize();
// window.addEventListener('resize', checkScreenSize);