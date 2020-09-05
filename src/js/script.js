document.addEventListener("DOMContentLoaded", function(event) {
    const selectElement = (element) => document.querySelector(element);

    selectElement('.mobile-menu').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
        selectElement('.background-bg').classList.toggle('active-bg');
    });
});
