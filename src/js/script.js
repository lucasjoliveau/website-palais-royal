document.addEventListener("DOMContentLoaded", function(event) {

    AOS.init();
    const selectElement = (element) => document.querySelector(element);

    // Navigation menu
    selectElement('.mobile-menu').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
        selectElement('.background-bg').classList.toggle('active-bg');
        setTimeout(disabledMenu, 1000);
    });

    // Call disabled mobile menu
    function disabledMenu () {
        // If the mobile menu is open
        if (selectElement('header').classList.contains('active')) {
            console.log("ouvert");
            document.getElementById("nav-item-id").style.display = "unset";
        }
        // When the mobile menu is closed
        else {
            document.getElementById("nav-item-id").style.display = "none";
        }
    }

    // Language selector
    selectElement('.language-selector-link').addEventListener('click', () => {
       console.log('Click menu langue');
       selectElement('.language-selector-modale').classList.remove('language-selector-modale-hide');
       // selectElement('body').style.overflow = "hidden";
    });

    selectElement('.modale-close').addEventListener('click', () => {
        selectElement('.language-selector-modale').classList.add('language-selector-modale-hide')
        // selectElement('body').style.overflow = "";
    })
});