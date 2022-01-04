//FOR SCROLL-UP BUTTON 
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});


//Function is for filtering for products 
function filterSelection() {
    // Get an array of checked filter checked buttons,
    const filteredClasses = $('#filters :checked').get()
      // convert it to an array of CSS classes,
        .map(el => '.' + el.value)
      // and join them all together into a single CSS selector
        .join('');
        console.log(filteredClasses);
        //If both are checked, the array has no match to .bla.blob together and reads length 0
        //So, we show what is supposed to be hidden instead 
        if (($('.column' + filteredClasses).show().length)==0){
          $('.column').show();
        }
        else{
          $('.column').hide();
          $('.column' + filteredClasses).show();
        }
}
//Function is the same filtering but for mobile
  function filterSelectionMobile() {
    const filteredClasses = $('#filters-mobile :checked').get().map(el => '.' + el.value).join('');
        console.log(filteredClasses);
        if (($('.column' + filteredClasses).show().length)==0){
          $('.column').show();
        }
        else{
          $('.column').hide();
          $('.column' + filteredClasses).show();
        }
  }
  // function ascendingPrice(){
  //   const productArray = $('#filters-mobile').get().map(el => '.' + el.value);
  // }

document.addEventListener('DOMContentLoaded', () => {
  // Change events from all the radio buttons will bubble up to #filters
  // Bootstrap swallows the standard DOM event, so this has to use jQuery
  $('#filters').change(filterSelection);
  $('#filters-mobile').change(filterSelectionMobile);
});

