$(document).ready(function(){
	var modal = $('#mypopUp');
	var modalVideo = $('.video');
	var modalImg = $('#img01');
	$(".myImg").on('click', function(event){
		
		
		modal.css('display', 'block');
		modalImg.attr('src', $(this).attr('src'));
	});

	$(".myVideo").on('click', function(event){
		
		
		modal.css('display', 'block');
		modalVideo.attr('src', 'https://player.vimeo.com/video/294625394?muted=1&autoplay=1&byline=0&title=0"');
	});

	$('.close').on('click', function(event){
		modalVideo.attr('src', '');
		modalImg.attr('src', '');
		modal.css('display', 'none');
	});

	$(document).on("scroll", onScroll);
  // Add smooth scrolling to all links
  	$("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
    	} // End if
  	});


	$(".hamburger").click(
  function() {
	    $(".hamburger").toggleClass("invisible");
	    
	    $(".cross").toggleClass("visible");
	    
	    $('.menu').toggleClass('mobile1');

	    $('.menuItem').toggleClass('mobile2');

	    $('.menuMiniBox').toggleClass('mobile');
  }
	);

	$(".cross").click(
  function() {
	    $(".hamburger").toggleClass("invisible");
	    
	    $(".cross").toggleClass("visible");
	    
	    $('.menu').toggleClass('mobile1');

	    $('.menuItem').toggleClass('mobile2');

	    $('.menuMiniBox').toggleClass('mobile');
	    
  }
	);

});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('#menuBox a').each(function(){
		var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var menu = $('#Menu').height();
        if (refElement.position().top <= (scrollPos + menu) && refElement.position().top + refElement.height() > scrollPos) {
            $('#menuBox a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
