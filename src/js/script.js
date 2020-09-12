document.addEventListener("DOMContentLoaded", function(event) {
    const selectElement = (element) => document.querySelector(element);

    selectElement('.mobile-menu').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
        selectElement('.background-bg').classList.toggle('active-bg');
    });

    // Language selector
    selectElement('.language-selector-link').addEventListener('click', () => {
       console.log('Click menu langue');
       selectElement('.language-selector-modale').classList.remove('language-selector-modale-hide');
    });
});