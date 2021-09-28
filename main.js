$(document).ready(main);

var contador = 1;

function main () {
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

