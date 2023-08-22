$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

$(document).ready(function () {
    fio.value = localStorage.getItem('fio');
    fio.oninput = () => {
        localStorage.setItem('fio', fio.value)
    };
});

function checkForm(form) {
    if ((document.getElementById('fio').value !== "")&&(document.getElementById('num').value !== "")&&(rules.checked) ) {
        document.getElementById('form_test').hidden = false;
        var element = document.getElementById("form_test2");
        element.classList.add("test");
    }
    else {
        document.getElementById('err').innerHTML = '* Пожалуйста, заполните все поля и дайте согласие на обработку персональных данных';
        return false;
    }
    return false;
};

$(document).ready(function () {
    $('.phone-field').inputmask("+7(999)999-9999");

    jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });

    var form = $('.form-request');

    form.validate();

    $.validator.addClassRules({
        'phone-field': {
            checkMaskPhone: true,
        }
    });
});