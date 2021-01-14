$(document).ready(function() {
    if(window.location.pathname == "/respuestas.html"){

        var data = $.getJSON('http://167.172.139.40:8081/api/propuestas/', function(data) {
            $.each(
                data,
                function(intIndex,objValue){
                    $('#datosJSON')
                    .append("<tr>")
                    .append(
                        $("<td>" + intIndex + "</td>")
                    )
                    .append(
                        $("<td>" +objValue.lejana+ "</td>")
                    )
                    .append(
                        $("<td>" +objValue.realista+ "</td>")
                    )
                    .append("</tr>");
                }
                
            );
        });
    }
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 4, 2020 08:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "Las elecciones se llevarán a cabo en " + days + " días, " + hours + " horas y "
    + minutes + " minutos.";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "¡Vota Ya!";
    }
    }, 1000);
});


(function ($) {
    "use strict"; // Start of use strict
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict







// function ($) {  
//       console.log("Hola");
//       $.getJSON('http://167.172.139.40:8081/api/propuestas/', function (data) {
//         console.log(data);
  
//         var items = data.items.map(function (item) {
//           return item.key + ': ' + item.value;
//         });
  
//         showData.empty();
  
//         if (items.length) {
//           var content = '<li>' + items.join('</li><li>') + '</li>';
//           var list = $('<ul />').html(content);
//           showData.append(list);
//         }
//       });
  
//       showData.text('Loading the JSON file.');
// }