//adding the action to the button Cookie

$(document).on('click', '#banner-cookies button', function(){    

    $.ajax({

       url : 'cookies.php',

       type : 'GET',

       success : function(code_html, statut){

        $("#banner-cookies").fadeOut(800);          

       }

    }); 

});