document.addEventListener('DOMContentLoaded', function () {
    setLanguage('en'); // Set default language to English

    function setLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            if (element.getAttribute('data-lang') === language) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    }

    window.setLanguage = setLanguage; // Make the function globally accessible
});
