document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu-content');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});