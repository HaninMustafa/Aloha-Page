$(function() {
  $(function() {
    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
    });
    });
/*******************smooth scrolling*******************/

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700); //the speed pf the scrolling
            return false;
          }
        }
      });
    });




    $(function() {
    		$('.sea-banner').on('submit', 'form', function(event) {
    			event.preventDefault();
    			if ( $('#the-email').val().length == 0 ) {
    				alert('Enter your email, please.');
    			} else {
    				alert('Thank you for your subscribing.');
    			}
    		});
    	});





      var counter = 0;

         $('.add-cart-button').click(function() {
         counter++;

         $('#counter').text(counter);
         $('#counter').show();
       });

})