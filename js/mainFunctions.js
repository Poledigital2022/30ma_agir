$(document).ready(function(){
  
    $article1_button = $('#article1_btn'),
    $article1_text1   = $('#article1_text1'),
    $article1_text2   = $('#article1_text2'),
    $article1_btn1_txt1 = $('#txt1_btn1'),
    $article1_btn1_txt2 = $('#txt2_btn1'),
    $article1_txt = $("#article-txt1"),
    visible = false,
    $article2_button = $('#article2_btn'),
    $article2_text1   = $('#article2_text1'),
    $article2_text2   = $('#article2_text2'),
    $article2_btn1_txt1 = $('#txt3_btn1'),
    $article2_btn1_txt2 = $('#txt4_btn1'),
    $article2_txt = $("#article-txt2"),
    visible2 = false,
    $article3_button = $('#article3_btn'),
    $article3_text1   = $('#article3_text1'),
    $article3_text2   = $('#article3_text2'),
    $article3_btn1_txt1 = $('#txt5_btn1'),
    $article3_btn1_txt2 = $('#txt6_btn1'),
    $article3_txt = $("#article-txt3"),
    visible3 = false,
    

//Click du button 1
$article1_button.click(function(){
if ( visible ) {
  $article1_text1.slideUp('fast',function(){
    $article1_text1.addClass('hide')
         .slideDown(0);
         $article1_text2.removeClass('hide');
         $article1_btn1_txt1.removeClass('hide');
         $article1_btn1_txt2.addClass('hide');
         $article1_txt.removeClass('article-fix-h');
  });
} else {
    $article1_text2.addClass('hide');
    $article1_text1.slideUp(0,function(){
        $article1_text1.removeClass('hide').slideDown('fast');
        $article1_btn1_txt2.removeClass('hide');
        $article1_btn1_txt1.addClass('hide');
        $article1_txt.addClass('article-fix-h');
  });
}
visible = ! visible;
});

//Click du button 2
$article2_button.click(function(){
    if ( visible2 ) {
      $article2_text1.slideUp('fast',function(){
        $article2_text1.addClass('hide')
             .slideDown(0);
             $article2_text2.removeClass('hide');
             $article2_btn1_txt1.removeClass('hide');
             $article2_btn1_txt2.addClass('hide');
             $article2_txt.removeClass('article-fix-h');
      });
    } else {
        $article2_text2.addClass('hide');
        $article2_text1.slideUp(0,function(){
            $article2_text1.removeClass('hide').slideDown('fast');
            $article2_btn1_txt2.removeClass('hide');
            $article2_btn1_txt1.addClass('hide');
            $article2_txt.addClass('article-fix-h');
      });
    }
    visible2 = ! visible2;
    });

//Click du button 3
$article3_button.click(function(){
    if ( visible3 ) {
      $article3_text1.slideUp('fast',function(){
        $article3_text1.addClass('hide')
             .slideDown(0);
             $article3_text2.removeClass('hide');
             $article3_btn1_txt1.removeClass('hide');
             $article3_btn1_txt2.addClass('hide');
             $article3_txt.removeClass('article-fix-h');
      });
    } else {
        $article3_text2.addClass('hide');
        $article3_text1.slideUp(0,function(){
            $article3_text1.removeClass('hide').slideDown('fast');
            $article3_btn1_txt2.removeClass('hide');
            $article3_btn1_txt1.addClass('hide');
            $article3_txt.addClass('article-fix-h');
      });
    }
    visible3 = ! visible3;
    });
//$newsletter

    $("#newsletter-btn").click(function(){
        $("#newsletter-img1").toggleClass("hide");
        $("#newsletter-img2").toggleClass("hide");
        $(".newsletter-box").fadeIn("slow").toggleClass("hide");
        $("#newsletter-btn").toggleClass("ptop-0");
      });
      $("#newsletter-close").click(function(){
        $(".newsletter-box").fadeIn("slow").toggleClass("hide");
        $("#newsletter-img1").toggleClass("hide");
        $("#newsletter-img2").toggleClass("hide");
        $("#newsletter-btn").toggleClass("ptop-0");
      });
 


//Said bar
$("#side_bar_btn").click(function(){
    if ($("body").width() <= 1024){
      $(".side_bar").toggleClass("side_bar_up");
      $("#arrow-down").toggleClass("arrow-down");
      $(".span-down").toggleClass("hide");
      $("#newsletter-btn").toggleClass("hide");
      $("#arrow-link").toggleClass("pt-3");
      $('html, body').toggleClass('overflowHide');
      $(this).toggleClass("Mplus");
    }
});

$("#arrow-link").click(function(){
  if ($("body").width() <= 1024){
    $(".side_bar").toggleClass("side_bar_up");
    $("#arrow-down").toggleClass("arrow-down");
    $(".span-down").toggleClass("hide");
    $("#newsletter-btn").toggleClass("hide");
    $("#arrow-link").toggleClass("pt-3");
    $('html, body').toggleClass('overflowHide')
    $("#side_bar_btn").toggleClass("Mplus"); 
  }
});

//hide classe
if ($("body").width() >= 1025){
    // alert($("body").width());
    $(".feed-box").removeClass('hide');
}
else{
    // alert("ok")
    // $(".feed-box").addClass('hide');
}


$( window ).resize(function() {
if ($("body").width() >= 992){
    // alert($("body").width());
    // $(".feed-box").removeClass('hide');
}
else{
    // alert("ok")
    // $(".feed-box").addClass('hide');
}
});


// $(".vertical-center-4").slick({
//     dots: true,
//     vertical: true,
//     centerMode: true,
//     dots: false,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     // lazyLoad: 'ondemand',
//     // adaptiveHeight: true,
//     // draggable:true,
//     // infinite:true
//     // swipe:true
//   });

  // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


$(".close").click(function(){
  $("#myModal").addClass('d-none');
});
$(".btn-acc").click(function(){
  $("#myModal").addClass('d-none');
});
// $("#myModal").click(function(){
//   $("#myModal").addClass('d-none');
// });


//get  price
$(".price1").click(function(){
  // $(".labele_val").text("35 €");
  $(".labele_val").text((35 - (35 * 0.66)).toFixed(2) + "€");
  $(".price1").addClass("active");
  $(".price2").removeClass("active");
  $(".price3").removeClass("active");
  $(".price4").removeClass("active");
  $("#don_price").attr("href", "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount=35");
});
$(".price2").click(function(){
  // $(".labele_val").text("50 €");
  $(".labele_val").text((50 - (50 * 0.66)).toFixed(2) + "€");
  $(".price2").addClass("active");
  $(".price1").removeClass("active");
  $(".price3").removeClass("active");
  $(".price4").removeClass("active");
  $("#don_price").attr("href", "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount=50");
});
$(".price3").click(function(){
  // $(".labele_val").text("80 €");
  $(".labele_val").text((80 - (80 * 0.66)).toFixed(2) + "€");
  $(".price3").addClass("active");
  $(".price1").removeClass("active");
  $(".price2").removeClass("active");
  $(".price4").removeClass("active");
  $("#don_price").attr("href", "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount=80");
});
$(".price4").click(function(){
  // $(".labele_val").text("100 €");
  $(".labele_val").text((100 - (100 * 0.66)).toFixed(2) + "€");
  $(".price4").addClass("active");
  $(".price2").removeClass("active");
  $(".price3").removeClass("active");
  $(".price1").removeClass("active");
  $("#don_price").attr("href", "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount=100");
});
$("#price5").click(function(){
  if($("#price5").val()){
    // $(".labele_val").text($("#price5").val() + " €");
    $(".labele_val").text((parseInt($("#price5").val()) - (parseInt($("#price5").val()) * 0.66)).toFixed(2) + "€");
    newurl = "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount="+ $("#price5").val();
    $("#don_price").attr("href", newurl);
  }
  else{
    $(".labele_val").text("-- €");
  }
  $(".price4").removeClass("active");
  $(".price3").removeClass("active");
  $(".price2").removeClass("active");
  $(".price1").removeClass("active");
});
$("#price5").keyup(function(){
  if($("#price5").val()){
    $(".labele_val").text((parseInt($("#price5").val()) - (parseInt($("#price5").val()) * 0.66)).toFixed(2) + "€");
    newurl = "https://don.30millionsdamis.fr/site/30ma/refuges/fr/don/index1.html?&amount="+ $("#price5").val();
    $("#don_price").attr("href", newurl);
  }
  else{
    $(".labele_val").text("-- €");
  }
});


$('#overlay').on('click', function(){
  closeModal();
})


});

function openModal() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("overlay").style.display = "block";  
}

function closeModal() {
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      // dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

