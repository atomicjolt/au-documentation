// jQuery(document).ready(function($){
//   var headerHeight = $('.c-title').height();
//   var containHeight = $('.c-contain').height();
//   var offsetHeight = headerHeight + containHeight;
// 	// browser window scroll (in pixels) after which the "back to top" link is shown
// 	var offset =  offsetHeight / 2,
// 		//duration of the top scrolling animation (in ms)
// 		scroll_top_duration = 700,
// 		//grab the "back to top" link
// 		$back_to_top = $('.c-back-to-top');
//
// 	//hide or show the "back to top" link
// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > offset ) {
//       $back_to_top.addClass('is-visible');
//     }else{
//       $back_to_top.removeClass('is-visible');
//     };
// 	});
//
// 	//smooth scroll to top
// 	// $back_to_top.on('click', function(event){
// 	// 	event.preventDefault();
// 	// 	$('body,html').animate({
// 	// 		scrollTop: 0 ,
// 	// 	 	}, scroll_top_duration
// 	// 	);
// 	// });
//
//
//
//   $(function() {
//     $('a[href*="#"]:not([href="#"])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//         }
//       }
//     });
//   });
//
// });
