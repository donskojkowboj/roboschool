const body = document.body,
      tooltip = document.querySelector('#tooltip'),
      title = document.querySelector('#title');

const info = document.createElement('div');
      info.id = 'info';
      info.classList.add('info');
      info.innerHTML = 'При наличии свободных мест';

let leaveTimeout;
let isHovered = false;

function handleHover() {
    tooltip.style.opacity = 0.4;
    title.append(info);
    isHovered = true;
    clearTimeout(leaveTimeout);
}

function handleMouseLeave() {
    if (!isHovered) return;
    tooltip.style.opacity = 'initial';
    info.remove();
    isHovered = false;
}

tooltip.addEventListener('mouseenter', () => {
    handleHover();
});

tooltip.addEventListener('mouseleave', () => {
    leaveTimeout = setTimeout(() => {
        handleMouseLeave();
    }, 2000);
});









