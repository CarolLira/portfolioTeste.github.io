function openNav(){document.getElementById("side-navbar").style.width="200px"}function closeNav(){document.getElementById("side-navbar").style.width="0"}$(".slider").slick({draggable:!0,arrows:!0,dots:!0,fade:!0,speed:900,infinite:!0,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",touchThreshold:100}),$('header a[href^="#"]').on("click",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top;$("html, body").animate({scrollTop:a- -4},1500)});