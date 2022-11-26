(function burgerIcon() {
    let butIcon = document.querySelector('.burger_icon');
    let butIconSpan = document.querySelectorAll('.burger_icon_elem');
    let collapse = document.querySelector('.my_collapse');
    let blackWrap = document.querySelector('.black_wrap');
    let colapseLink = document.querySelectorAll('.my_collapse a');
    function clickBurg() {
        for (let el of butIconSpan) {
            el.classList.toggle('active');
        };
        collapse.classList.toggle('active');
        blackWrap.classList.toggle('d-block');
    };
    function clickBlackWrap() {
        blackWrap.classList.toggle('d-block');
        collapse.classList.toggle('active');
        for (let el of butIconSpan) {
            el.classList.remove('active');
        };
    }
    function clickLink() {
        collapse.classList.remove('active');
        blackWrap.classList.remove('d-block');
        for (let el of butIconSpan) {
            el.classList.remove('active');
        };
    };
    for (let el of colapseLink) {
        el.addEventListener('click', clickLink);
    };
    butIcon.addEventListener('click', clickBurg);
    blackWrap.addEventListener('click', clickBlackWrap);
})();
(function butScrollTop() { 
    let butScroll = document.getElementsByClassName('button_top')[0];
    let socialNetworksFixed = document.getElementsByClassName('social_networks_fixed')[0];
    let social_networks = document.querySelector('.container_contact .social_networks');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 450) {
            butScroll.classList.add('visible_but');
        } else {
            butScroll.classList.remove('visible_but');
        }
        if (window.matchMedia("(max-width: 991px)").matches) {
            if (window.scrollY >= social_networks.offsetTop - window.innerHeight) {
                socialNetworksFixed.classList.add('d_none');
                butScroll.classList.add('bottom_5');
            } else {
                socialNetworksFixed.classList.remove('d_none');
                butScroll.classList.remove('bottom_5');
            }
        }
    });
    butScroll.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
})();
(function sendForm() {
    const TOKEN = "5650221213:AAEWsB7PAe03nW4hmchD3zhYBMSNDkA4Gs8";
    const CHAT_ID = "-1001324585348";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let textareaPopup = document.getElementsByClassName('message_form_popup')[0];
    let formPopup = document.getElementById('form_popup');
    formPopup.addEventListener('submit', onSendForm);
    let messageToUeser = document.getElementsByClassName('message_to_user')[0];
    let btnContactMe = document.querySelector('.but_contact_me');
    btnContactMe.addEventListener('click', onClickButClose);
    function onSendForm(e) {
        e.preventDefault();
        let message = `<b>Сообщение с сайта портфолио!</b>\n`;
        message += `<b>Имя отправителя: </b>${this.name.value}\n`;
        message += `<b>Почта отправителя: </b>${this.email.value}\n`;
        message += `<b>Сообщение: </b>${this.mess.value}`;
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                this.name.value = '';
                this.email.value = '';
                this.mess.value = '';
                messageToUeser.innerHTML = 'Дані успішно відправлені!';
                textareaPopup.after(messageToUeser);
            })
            .catch(() => {
                messageToUeser.innerHTML = 'Помилка';
                textareaPopup.after(messageToUeser);
            });
    }
    function onClickButClose() {
        messageToUeser.innerHTML = '';
        messageToUeserName.innerHTML = "";
        messageToUeserEmail.innerHTML = "";
        messageToUeserMess.innerHTML = "";
        inputName.value = '';
        inputEmail.value = '';
        inputMesssage.value = '';
        inputName.style.outlineColor = '#828282';
        inputEmail.style.outlineColor = '#828282';
        inputMesssage.style.outlineColor = '#828282';
        sendBtn.disabled = true;
    }
    let inputName = document.getElementsByClassName('input_name')[0];
    let inputEmail = document.getElementsByClassName('input_email')[0];
    let inputMesssage = document.getElementsByClassName('input_message')[0];
    let sendBtn = document.getElementsByClassName('send_btn')[0];
    let regExpValidName = /\d/;
    let regExpValidEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let messageToUeserName = document.createElement('p');
    inputName.after(messageToUeserName);
    let messageToUeserEmail = document.createElement('p');
    inputEmail.after(messageToUeserEmail);
    let messageToUeserMess = document.createElement('p');
    inputMesssage.after(messageToUeserMess);
    function onValidationName() {
        if (regExpValidName.test(inputName.value) === true) {
            inputName.style.outlineColor = 'rgb(255 00 0)';
            return false;
        }
        if (!inputName.value) {
            inputName.style.outlineColor = 'rgb(255 00 0)';
            return false;
        } else {
            inputName.style.outlineColor = '#828282';
            return true;
        }
    }
    function onValidationNameBlur() {
        if (regExpValidName.test(inputName.value) === true) {
            messageToUeserName.innerHTML = "Ім'я не може містити цифри"; 
            return false;
        } 
        if (!inputName.value) {
            inputName.style.outlineColor = 'rgb(255 00 0)';
            messageToUeserName.innerHTML = "Введіть ваше ім'я";
            return false;
        }
    }
    function onValidationFocus(e) {
        if (e.target === inputName) {
            messageToUeserName.innerHTML = "";
        } else if (e.target === inputEmail) {
            messageToUeserEmail.innerHTML = "";
        };
    }
    function onValidationEmail() {
        inputEmail.value = inputEmail.value.trim();
        if (regExpValidEmail.test(inputEmail.value) === false) {
            inputEmail.style.outlineColor = 'rgb(255 00 0)';
            return false;
        }
        else {
            inputEmail.style.outlineColor = '#828282';
            return true
        }
    }
    function onValidationEmailBlur() {
        if (regExpValidEmail.test(inputEmail.value) === false) {
            inputEmail.style.outlineColor = 'rgb(255 00 0)';
            messageToUeserEmail.innerHTML = "Невірно вказана електронна пошта";
            return false;
        }
    }
    function onValidationMessageBlur() {
        if (!inputMesssage.value) {
            inputMesssage.style.outlineColor = 'rgb(255 00 0)';
            messageToUeserMess.innerHTML = "Введіть ваше повідомлення";
        }
    }
    function onValidationMessageFocus() {
        inputMesssage.style.outlineColor = '#828282';
        messageToUeserMess.innerHTML = "";
    }
    function onValidationMessage() {
        if (!inputMesssage.value) {
            inputMesssage.style.outlineColor = 'rgb(255 00 0)';
            messageToUeserMess.innerHTML = "Введіть ваше повідомлення";
            return false;
        } else {
            return true;
        }
    }
    function onDisabled() {
        if (onValidationEmail() === true && onValidationName() === true && onValidationMessage() === true) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    }
    inputName.addEventListener('keyup', onValidationName);
    inputName.addEventListener('blur', onValidationNameBlur);
    inputName.addEventListener('focus', onValidationFocus);
    inputEmail.addEventListener('keyup', onValidationEmail);
    inputEmail.addEventListener('blur', onValidationEmailBlur);
    inputEmail.addEventListener('focus', onValidationFocus);
    inputMesssage.addEventListener('keyup', onValidationMessage);
    inputMesssage.addEventListener('blur', onValidationMessageBlur);
    inputMesssage.addEventListener('focus', onValidationMessageFocus);
    inputName.addEventListener('keyup', onDisabled);
    inputEmail.addEventListener('keyup', onDisabled);
    inputMesssage.addEventListener('keyup', onDisabled);
})();