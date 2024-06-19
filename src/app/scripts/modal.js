const body = document.body,
      modal = document.querySelector('#modal'),
      backdrop = document.querySelector('#backdrop'),
      openModalBtns = document.querySelectorAll('.trainers__list_item-more'),
      closeModalBtn = document.querySelector('#modal-close-btn'),
      closeModalBtnMobile = document.querySelector('#modal-close-btn-mobile'),
      dropdownMenu = document.querySelector('#dropdown-menu'),
      dropdownSections = document.querySelectorAll('.modal__dropdown-item'),
      dropdownIcon = document.querySelector('#dropdown-icon'),
      dropdownBtn = document.querySelector('#dropdown-btn'),
      dropdownBtnText = document.querySelector('#dropdown-btn-text');

function closeModal() {
    modal.classList.add('display-none');
    body.classList.remove('no-scroll');
};

function openModal() {
    modal.classList.remove('display-none');
    body.classList.add('no-scroll');
};

function openDropdown() {
    dropdownMenu.classList.remove('display-none');
    dropdownIcon.style.transform = 'skew(180deg) rotate(180deg)';
    dropdownIcon.style.transition = '0.3s all ease-in-out';
};

function closeDropDown() {
    dropdownMenu.classList.add('display-none');
    dropdownIcon.style.transform = 'initial';
};

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && !modal.classList.contains('display-none')) {
        closeModal();
    };
});

openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        openModal();
    });
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});

closeModalBtnMobile.addEventListener('click', () => {
    closeModal();
});

backdrop.addEventListener('click', () => {
    closeModal();
});

dropdownBtn.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('display-none')) {
        openDropdown();
        return;
    };
    closeDropDown();
});

dropdownSections.forEach(section => {
    let text = section.textContent;
    section.addEventListener('click', () => {
        dropdownBtnText.textContent = text;
        closeDropDown();
    });
});
