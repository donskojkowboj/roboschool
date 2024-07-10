const slider = document.querySelector('#slider'),
      btns = document.querySelectorAll('.trainer__buttons_arrows'),
      track = document.querySelector('#scrollbar-track'),
      thumb = document.querySelector('#scrollbar-thumb');

let maxScrollLeft = slider.scrollWidth - slider.clientWidth;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const direction = btn.id === 'btn-prev' ? -1 : 1;
        const scroll = direction * slider.clientWidth;
        slider.scrollBy({
            left: scroll,
            behavior: 'smooth'
        });
    });
});

slider.addEventListener('scroll', () => {
    const thumbPosition = (slider.scrollLeft / maxScrollLeft) * (track.clientWidth - thumb.offsetWidth);
    thumb.style.left = `${thumbPosition}px`;
});

thumb.addEventListener('mousedown', (e) => {
    const startX = e.clientX;
    const thumbPosition = thumb.offsetLeft;
    const maxThumbPosition = track.getBoundingClientRect().width - thumb.offsetWidth;

    const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
        thumb.style.left = `${boundedPosition}px`;
        slider.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});

window.addEventListener('resize', () => {
    maxScrollLeft = slider.scrollWidth - slider.clientWidth;
});