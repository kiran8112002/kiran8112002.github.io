const srWork = ScrollReveal({
    distance: '40px',
    duration: 800,
    easing: 'ease',
    reset: false
});

srWork.reveal('.work__subtitle', { origin: 'top' });
srWork.reveal('.work__card', { origin: 'bottom', interval: 120 });

document.querySelectorAll('.work__img').forEach(imgBox => {
    const slides = imgBox.querySelectorAll('.work__img-slide');
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 3000);
});
