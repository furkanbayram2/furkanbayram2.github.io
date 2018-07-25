// SLIDER
$("#main-slider").owlCarousel({
			 
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay:true
     
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
});




$('[data-remodal-id=modal2]').remodal({
    modifier: 'with-red-theme'
  });


// accordion
$(document).ready(function(){
    $('.example-opensingle').beefup({
        openSingle: true,
        stayOpen: false
    });
});


/* detaylari goster */

$(document).ready(function(){
    $(".show-detail").click(function(){
        $(this).parent().parent().find(".other-properties").slideToggle();
    });
});



$(document).ready(function(){
    $(".faq-box").click(function(){
        $(this).next(".faq-content").slideToggle();
    });
});


