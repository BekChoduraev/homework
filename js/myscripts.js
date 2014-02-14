$(document).ready(function () {

    $("#loginform").validate({

        rules: {

            login: {
                required: true,
                minlength: 4,
                maxlength: 16,
                email: true
            },
            pswd: {
                required: true,
                minlength: 6,
                maxlength: 16

            },

            pswd1: {
                equalTo: "#pswd"
            }



        },

        messages: {

            login: {
                required: "Обязательно заполнить",
                minlength: "MIN 6",
                maxlength: "MAX 16",
                email:" Вводи Email правильно"
            },

            pswd: {
                required: "Обязательно заполнить",
                minlength: "MIN 6",
                maxlength: "MAX 16"
            },
            pswd1: {
                required: "Обязательно заполнить",
                minlength: "MIN 6",
                maxlength: "MAX 16",
                equalTo: "Error"
            }



        }

    });


});
//end of ready