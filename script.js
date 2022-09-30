"use strict"
$(document).on('click', '.submit', function () {
    const name = $("#formname");
    const idade = $("#formidade");
    const email = $("#formemail");

    if (name.val() == "") {
        alert("Preencha os campos corretamente!")
        $('#formname').focus();
        $('#formname, #formidade, #formemail').css("background-color", "#A9A9A9");
    } else if (isNaN(idade.val()) || idade.val() <= 0) {
        alert("Preencha os campos corretamente!")
        $('#formidade').focus();
        $('#formidade, #formemail').css("background-color", "#A9A9A9");
        $('#formidade').val("");
    } else if (email.val().indexOf("@") < 0) {
        alert("Preencha os campos corretamente!")
        $('#formemail').focus();
        $('#formemail').css("background-color", "#A9A9A9");
        $('#formemail').val("");
    }
});

$(document).on("input", '#formname, #formidade, #formemail', function () {
    $(this).css("background-color", "inherit");
});