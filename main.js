$(document).ready(main);
<<<<<<< HEAD

function main () {
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
=======
var contador = 1;
function main() {
  // Mostramos y ocultamos submenus
  $('.submenu').click(function () {
    $(this).children('.children').slideToggle();
  });
>>>>>>> 5335397fc868afe6d7c5e9136bafe86f2b797d9c
}
