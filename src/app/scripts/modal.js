const body = document.body,
      modal = document.querySelector('#modal'),
      backdrop = document.querySelector('#backdrop'),
      openModalBtns = document.querySelectorAll('.trainers__list_item-more'),
      closeModalBtn = document.querySelector('#modal-close-btn');

function closeModal() {
    modal.classList.add('display-none');
    body.classList.remove('no-scroll');
};

function openModal() {
    modal.classList.remove('display-none');
    body.classList.add('no-scroll');

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

backdrop.addEventListener('click', () => {
    closeModal();
})