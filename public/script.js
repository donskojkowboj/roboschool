document.addEventListener('DOMContentLoaded', () => {

    const body = document.body,
          button = document.querySelector('.hamburger-button'),
          burgerButton = document.querySelector('.button_burger'),
          closeButton = document.querySelector('.button_close'),
          menu = document.querySelector('.menu__list'),
          menuLinks = document.querySelectorAll('.menu__list_item a');
          
    function enableScroll() {
        body.classList.remove('no-scroll');
    }
    function disableScroll() {
        body.classList.add('no-scroll');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.visibility = 'hidden';
            burgerButton.style.display = 'block';
            closeButton.style.display = 'none'
            enableScroll();
        })
    })

    button.addEventListener('click', () => {
        if (burgerButton.style.display !== 'none' &&  closeButton.style.display !== 'block') {
            burgerButton.style.display = 'none';
            closeButton.style.display = 'block'
            menu.style.visibility = 'visible';
            disableScroll();
        } else {
            burgerButton.style.display = 'block';
            closeButton.style.display = 'none'
            menu.style.visibility = 'hidden';
            enableScroll();
        }
    });

});




