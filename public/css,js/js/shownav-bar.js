const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');
const header = document.querySelector('header');
const sectionsAndDivs = document.querySelectorAll('section, div');

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show');
    menuIcon.classList.toggle('active');

    sectionsAndDivs.forEach(sectionOrDiv => {
        if (!header.contains(sectionOrDiv)) {
            sectionOrDiv.classList.toggle('blur');
        }
    });
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('show');
        menuIcon.classList.remove('active');

        sectionsAndDivs.forEach(sectionOrDiv => {
            if (!header.contains(sectionOrDiv)) {
                sectionOrDiv.classList.remove('blur');
            }
        });
    }
});
