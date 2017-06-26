$(document).ready(function(){
var mq = window.matchMedia( "(min-width: 1124px)" );
	console.log(mq.matches);

	
	
		$('.jsSlider_wrap')
			.slick({
				infinite: false,
  				slidesToShow: 5,
			  variableWidth: false,
			  responsive: [
						    {
						      breakpoint: 1124,
						      settings: {
						        slidesToShow: 4,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 975,
						      settings: {
						        slidesToShow: 3,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 700,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    },
						    {
						      breakpoint: 480,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						    // You can unslick at a given breakpoint now by adding:
						    // settings: "unslick"
						    // instead of a settings object
						  ]
			});
		$('.wrap-price')
			.slick({
				infinite: false,
  				slidesToShow: 3,
			  variableWidth: false,
			   responsive: [
						    {
						      breakpoint: 1024,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 900,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 600,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						   
						    
						    // You can unslick at a given breakpoint now by adding:
						    // settings: "unslick"
						    // instead of a settings object
						  ]
			});	
		$('.slider-reference__wrap')
			.slick({
				autoplay:true,
				autoplaySpeed:7000,
				speed:1000,
				dots:true,
				arrows: true,
				infinite: false,
  				slidesToShow: 1,
  				slidesToScroll: 1,
  				 nextArrow: '.nextArrow',
        		prevArrow: '.prevArrow'
			  	
			});		
	
});

	


			
		


						 

					



	
		
			 


		