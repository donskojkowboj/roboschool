const slider = document.querySelector('#slider'),
      slides = document.querySelectorAll('.trainers__list_item'),
      btnPrev = document.querySelector('#btn-prev'),
      btnNext = document.querySelector('#btn-next');


const sliderWidth = slider.clientWidth,
      slidesGap = 40,
      slideWidth = slides[0].offsetWidth,
      totalSlideWidth = slideWidth + slidesGap,
      totalSlidesNumber = slider.children.length;

const track = document.querySelector('#scrollbar-track'),
      thumb = document.querySelector('#scrollbar-thumb'),
      trackRect = track.getBoundingClientRect(),
      thumbRect = thumb.getBoundingClientRect();
      

let dragging = false;

const moveStart = (e) => {
    e.preventDefault();
    dragging = true;
    document.addEventListener('mousemove', moving);
    document.addEventListener('mouseup', moveEnd);
    
}

const moveEnd = (e) => {
    e.preventDefault();
    dragging = false;
    document.removeEventListener('mousemove', moving);
    document.removeEventListener('mouseup', moveEnd);
}

const moving = (e) => {
    e.preventDefault();
    if (dragging) {
        let newLeft = e.clientX - trackRect.left - (thumbRect.width / 2);
        if (newLeft < 0) {
            newLeft = 0;
        } 
        if (newLeft > trackRect.width - thumbRect.width) {
            newLeft = trackRect.width - thumbRect.width;
        }
        thumb.style.left = `${newLeft}px`;

        const thumbPositionPercentage = newLeft / (trackRect.width - thumbRect.width);
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth; 

        slider.scrollTo({
            left: thumbPositionPercentage * maxScrollLeft
        });
    }
}

thumb.addEventListener('mousedown', moveStart);


let slideIndex = 0;

btnPrev.addEventListener('click', () => {
    slideIndex > 0 && slideIndex--;

    slider.scrollTo({
        left: slideIndex * totalSlideWidth
    });
});

btnNext.addEventListener('click', () => {
    slideIndex < totalSlidesNumber - 3 && slideIndex++;

    slider.scrollTo({
        left: slideIndex * totalSlideWidth
    });
});
