const form = document.querySelector('#form'),
      formInputs = form.querySelectorAll('input'),
      nameInput = document.querySelector('#name'),
      phoneInput = document.querySelector('#phone'),
      emailInput = document.querySelector('#email');


const regexName = new RegExp(/^[\u0400-\u04FF]{2,}$/);
const regexPhone = new RegExp(/\+7\d{10}/);
const regexEmail = new RegExp(/\w+@\w+\.\w+/);


formInputs.forEach((input, i) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (i < formInputs.length - 1) {
                formInputs[i + 1].focus(); 
            };
        };
    });
});

const handlePhoneInput = () => {
    phoneInput.value = phoneMask(phoneInput.value)
};

const phoneMask = (phone) => {
    return phone.replace(/^[^\+\d]+/, '')
                .replace(/^\++/, '+') 
                .replace(/(\+?\d{1})/, '+7');
};

phoneInput.addEventListener('input', handlePhoneInput, false);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    regexName.test(nameInput.value) && regexPhone.test(phoneInput.value) && regexEmail.test(emailInput.value) ? 
    console.log(`Имя пользователя: ${nameInput.value},\nНомер телефона: ${phoneInput.value},\nПочта: ${emailInput.value}`) : 
    alert('Неверно введены данные')
});