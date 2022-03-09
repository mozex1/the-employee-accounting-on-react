const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            } 
            if ((selector == '[name="name"]') && e.key.match(/[^а-яё]/ig) ) {
                e.preventDefault();
                
            }
        });
    });
};

export default checkTextInputs;