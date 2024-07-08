const body = document.body,
      modal = document.querySelector('#modal'),
      backdrop = document.querySelector('#backdrop'),
      openModalBtns = document.querySelectorAll('.trainers__list_item-more'),
      closeModalBtn = document.querySelector('#modal-close-btn'),
      tabs = document.querySelectorAll('.modal__tabs-item'),
      tabsContent = document.querySelectorAll('.modal__content-info'),
      dropdownMenu = document.querySelector('#dropdown-menu'),
      dropdownSections = document.querySelectorAll('.modal__dropdown-item'),
      dropdownIcon = document.querySelector('#dropdown-icon'),
      dropdownBtn = document.querySelector('#dropdown-btn'),
      dropdownBtnText = document.querySelector('#dropdown-btn-text');

const closeModal = () => {
    modal.classList.add('display-none');
    modal.classList.remove('display-flex');
    body.classList.remove('no-scroll');
    hideAllContentItems();
    showTabContent(0);
};

const openModal = () => {
    modal.classList.remove('display-none');
    modal.classList.add('display-flex');
    body.classList.add('no-scroll');
};

const openDropdown = () => {
    dropdownMenu.classList.remove('display-none');
    dropdownMenu.classList.add('display-flex')
    backdrop.classList.remove('display-none');
    dropdownIcon.classList.add('open');
    dropdownIcon.classList.remove('close');
};

const closeDropDown = () => {
    dropdownMenu.classList.add('display-none');
    dropdownMenu.classList.remove('display-flex')
    dropdownIcon.classList.remove('open');
    dropdownIcon.classList.add('close');
}

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
    closeDropDown()
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

dropdownSections.forEach((section, i) => {
    let text = section.textContent;
    section.addEventListener('click', () => {
        dropdownBtnText.textContent = text;
        closeDropDown();
        if (tabsContent[i].getAttribute('data-tab-content') === section.getAttribute('data-tab-button')) {
            hideAllContentItems();
            showTabContent(i);
        }
    });
});

const scrollToTop = (tabContentItem) => {
    tabContentItem.scrollTop = 0;
}

const showTabContent = (index) => {
    let text = tabs[index].textContent;
    tabsContent[index].classList.remove('display-none');
    tabs[index].classList.add('modal__tabs-item_active');
    dropdownBtnText.textContent = text;
    scrollToTop(tabsContent[index]);
}

const hideAllContentItems = () => {
    tabsContent.forEach(content => {
        content.classList.add('display-none');
    });
    tabs.forEach(tab => {
        tab.classList.remove('modal__tabs-item_active');
    });
}

tabs.forEach((tab, i) => {
    tab.classList.remove('modal__tabs-item_active');
    tabs[0].classList.add('modal__tabs-item_active');
    tab.addEventListener('click', () => {
        let text = tab.textContent;
        dropdownBtnText.textContent = text;
        if (tabsContent[i].getAttribute('data-tab-content') === tab.getAttribute('data-tab-button')) {
            hideAllContentItems();
            showTabContent(i);
        }
    });
});

hideAllContentItems();
showTabContent(0);