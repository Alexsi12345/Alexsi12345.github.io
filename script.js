window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const triggerHeight = header.offsetHeight; // высота заголовка для триггера
    if (window.scrollY > triggerHeight) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        header.classList.remove('right');
    }

    if (window.scrollY > 2 * triggerHeight) { // Заголовок уже прокручен вверх
        header.classList.add('right');
    }
});
