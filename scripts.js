

$(function() {
    $('.Volgende').click(function() 
        { 
          if ($(this).text() == "Klik hier om de volgende te zien!") 
          { 
             $(this).text("Klik hier om de vorige te zien!");
               $('.Sony').animate({
               opacity: 0, 
               marginLeft: '-200px'
           }, 'slow', 'linear', function() {
               $(this).hide();
        });
        $('.Oculus').animate({
                opacity: 100, 
                marginRight: '0px'
        }, 'slow', 'linear', function() {
            $(this).fadeIn();
        });
              $('.jumbotron').last().addClass('highLight');
          } 
          else 
          { 
             $(this).text("Klik hier om de volgende te zien!");
               $('.Oculus').animate({
                    opacity: 0, 
                    marginRight: '-200px'
                    }, 'slow', 'linear', function() {
                    $(this).hide();
        });
         $('.Sony').animate({
                    opacity: 100, 
                    marginLeft: '0px'
                    }, 'slow', 'linear', function() {
                    $(this).fadeIn(2000);
        });
              $('.jumbotron').first().addClass('highLight');
          }; 
    });
   });