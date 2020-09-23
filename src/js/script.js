document.addEventListener("DOMContentLoaded", function(event) {
    const selectElement = (element) => document.querySelector(element);

    // Navigation menu
    selectElement('.mobile-menu').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
        selectElement('.background-bg').classList.toggle('active-bg');
        setTimeout(disabledMenu, 1000);
    });



    // Call disabled mobile menu
    function disabledMenu () {
        // When the mobile menu is closed
        if (!selectElement('header').classList.contains('active')) {
            document.getElementById("nav-item-id").style.display = "none";
        }
    }

    // Language selector
    selectElement('.language-selector-link').addEventListener('click', () => {
       console.log('Click menu langue');
       selectElement('.language-selector-modale').classList.remove('language-selector-modale-hide');
       selectElement('body').style.overflow = "hidden";
    });

    selectElement('.modale-close').addEventListener('click', () => {
        selectElement('.language-selector-modale').classList.add('language-selector-modale-hide')
        selectElement('body').style.overflow = "";
    })
});