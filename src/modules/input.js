const inputCheck = () => {

    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');

    const mainInput = document.querySelectorAll('.form-name')[0];
    const modalInput = document.querySelectorAll('.form-name')[1];
    const footerInput = document.getElementById('form2-name');
    const messageInput = document.getElementById('form2-message');

    const emailInputs = document.querySelectorAll('.form-email');
    const phoneInputs = document.querySelectorAll('.form-phone');

    const numberCheck = (input) => {
        input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        });
    };

    const textCheck = (input) => {
        input.addEventListener('blur', (e) => {
            let riteWith = e.target.value.replace(/[^а-яё\-\s+]/gi, ' ');
            riteWith = riteWith.replace(/^\s+|\s+$/g, '');
            riteWith = riteWith.replace(/^\-+|\-+$/g, '');
            riteWith = riteWith.replace(/\s+/g, ' ');
            riteWith = riteWith.replace(/\-+/g, '-');

            e.target.value = riteWith;
            let riteWithUp = riteWith[0].toUpperCase() + riteWith.slice(1);
            e.target.value = riteWithUp;
        });


    };

    const mailCheck = (input) => {
        input.forEach((e) => {
            e.addEventListener('blur', () => {
                let riteWith = e.value.replace(/[^a-z\@\-\_\.\!\~\*\']/i, '');
                riteWith = riteWith.replace(/^\-+|\-+$/g, '');
                riteWith = riteWith.replace(/\-+/g, '-');

                e.value = riteWith;
            });
        });
    };

    const phoneCheck = (input) => {
        input.forEach((e) => {
            e.addEventListener('blur', () => {
                let riteWith = e.value.replace(/[^0-9\-\(\)]/gi, '');
                riteWith = riteWith.replace(/^\-+|\-+$/g, '');
                riteWith = riteWith.replace(/\-+/g, '-');

                e.value = riteWith;
            });
        });
    };

    numberCheck(calcSquare);
    numberCheck(calcCount);
    numberCheck(calcDay);

    textCheck(mainInput);
    textCheck(modalInput);
    textCheck(footerInput);
    textCheck(messageInput);

    mailCheck(emailInputs);
    phoneCheck(phoneInputs);
};

export default inputCheck;