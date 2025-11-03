const arrow = document.getElementById('down-arrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // change 50px to when you want it to disappear
        arrow.classList.add('hidden');
    } else {
        arrow.classList.remove('hidden');
    }
});
