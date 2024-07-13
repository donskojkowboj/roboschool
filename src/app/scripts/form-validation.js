const form = document.querySelector('#form'),
      formInputs = form.querySelectorAll('input'),
      nameInput = document.querySelector('#name'),
      phoneInput = document.querySelector('#phone'),
      emailInput = document.querySelector('#email');

const regexName = new RegExp(/^[\u0400-\u04FF]{2,}$/);
const regexEmail = new RegExp(/\w+@\w+\.\w+/);

formInputs.forEach((input, i) => {
    input.addEventListener('keydown', (e) => {
        let isSubmitted = false;
        if (e.key === 'Enter') {
            if (i < formInputs.length - 1) {
                formInputs[i + 1].focus(); 
                isSubmitted = true;
            }
            if (isSubmitted) {
                e.preventDefault();
            }
        };
    });
});

const handlePhoneInput = (e) => {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        formattedInputValue = '',
        selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
        return input.value = '';
    }
    console.log(phoneInput.value.trim().length);
    if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
            input.value = inputNumbersValue;
        }
        return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == '9') {
            inputNumbersValue = '7'+ inputNumbersValue;
        } 
        let firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
        formattedInputValue = firstSymbols + ' ';

        if (inputNumbersValue.length > 1) {
            formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
            formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
            formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
            formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
    }
    input.value = formattedInputValue;
};

const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '');
}

const handleKeydown = (e) => {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
        input.value = '';
    }
}

const handlePaste = (e) => {
    let pasted = e.clipboardData || window.clipboardData,
        input = e.target,
        inputNumbersValue = getInputNumbersValue(input);

        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
}

const handleSubmit = () => {
    regexName.test(nameInput.value) && regexEmail.test(emailInput.value) && phoneInput.value.trim().length >= 17 ? 
    console.log(`Имя пользователя: ${nameInput.value},\nНомер телефона: ${phoneInput.value},\nПочта: ${emailInput.value}`) : 
    alert('Неверно введены данные')
};

phoneInput.addEventListener('input', handlePhoneInput);
phoneInput.addEventListener('keydown', handleKeydown);
phoneInput.addEventListener('paste', handlePaste);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
});
