$(document).ready(

    function () {
        $('#registerform').submit(function (e) {
            e.preventDefault();

            const myFormData = {
                username:$('#username').val(),
                address:$('#address').val(),
                password:$('#password').val()
            }

// console.log(myFormData)

        $.ajax({
            url: 'http://localhost:5000/test',
            method:'POST',
            contentType:'application/json',
            data:JSON.stringify(myFormData),
            dataType:'json',

            success:function(result){
                console.log('success')
            },
            error:function(jqXHR,status){
                console.log('error');
            }


        })
        })
    }
)