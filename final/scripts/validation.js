function openNav() {
    document.getElementById("sideNav").style.width = "40%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

$(document).ready(function(){
    //submit button listener
    $('#submit-btn').on('click', function(ev){
        ev.preventDefault();
        var valid = validateForm();
        if(valid) {
            alert('You have successfully completed the form');
        } else {
            alert('There are errors in form');
        }
    });

    //validate form data
    function validateForm(){
        var errors=false;
        var inputs = $('#block2C input, #block2C textarea');
        var reasonChecked=false;
        var languageChecked=false;
        $.each(inputs, function(idx, el) {

            if ($(el).attr('type')==='text' || $(el).is('textarea')){
                if ($(el).attr('id')==='postalCode'){
                    if(!checkPostal($(el).val())){
                        errors=true;
                    }
                }else{
                    if ($(el).val().trim()===''){
                        errors=true;
                    }
                }

            }else if($(el).attr('type')==='email'){
                if (!checkEmail($(el).val())){
                    errors=true;
                }
            }else if($(el).attr('type')==='checkbox'){
                if($(el).is(':checked')){
                    if($(el).hasClass('reason')){
                        reasonChecked=true;
                    }else if($(el).hasClass('language')){
                        languageChecked=true;
                    }
                }
            }
        });

        if (!reasonChecked || !languageChecked){
            errors=true;
        }

        return !errors;

    }

    function checkPostal(pc){
        re =  /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;
        // ! means it will check for the negative of the vlaidation check in place
        return re.test(pc);
    }

    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

});