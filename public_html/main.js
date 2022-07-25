let lastInput = JSON.parse(localStorage.getItem('params')) || {
    name: '',
    position: '',
    phone: '',
    mobile: '',
    telegram: '',
    email: '',
    website: '',
};

const name = document.querySelector('.name');
const position = document.querySelector('.position');
const officePhone = document.querySelector('.office-phone');
const mobile = document.querySelector('.personal-phone');
const telegram = document.querySelector('.telegram');
const email = document.querySelector('.email');
const website = document.querySelector('.website');
const form = document.querySelector('.input-form');

name.value = lastInput.name;
position.value = lastInput.position;
officePhone.value = officePhone.value || lastInput.phone;
mobile.value = lastInput.mobile;
telegram.value = lastInput.telegram || telegram.value;
email.value = lastInput.email;
website.value = website.value || lastInput.website;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentName = name.value;
    document.querySelector('.result-name').innerHTML = currentName;
    lastInput.name = currentName;

    const currentPosition = position.value;
    document.querySelector('.result-position').innerHTML = currentPosition;
    lastInput.position = currentPosition;

    const currentPhone = officePhone.value;
    document.querySelector('.office-phone-out').innerHTML = currentPhone;
    lastInput.phone = currentPhone;

    const currentMobile = mobile.value;
    document.querySelector('.personal-phone-out').innerHTML = currentMobile;
    lastInput.mobile = currentMobile;

    const currentTelegram = telegram.value;
    document.querySelector('.result-telegram-link').innerHTML = currentTelegram;
    document.querySelector('.result-telegram-link').href = "https://t.me/" + currentTelegram.slice(1);
    lastInput.telegram = currentTelegram;

    const currentEmail = email.value;
    document.querySelector('.result-email-link').innerHTML = currentEmail;
    document.querySelector('.result-email-link').href = "mailto:" + currentEmail;
    lastInput.email = currentEmail;

    const currentWebsite = website.value;
    document.querySelector('.result-website').innerHTML = currentWebsite;
    document.querySelector('.result-website').href = currentWebsite;
    lastInput.website = currentWebsite;

    localStorage.setItem('params', JSON.stringify(lastInput));
});
