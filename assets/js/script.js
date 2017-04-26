$(document).ready(function() {

	imgs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two'];


	window.onload = function() {

		var index = Math.floor(Math.random() * imgs.length);
		var bg = imgs[index];	

		$('#bg-2').addClass(bg);
		$('#bg-2').css('z-index', 1);
		$('#menu-bg-2').addClass(bg);
		$('#menu-bg-2').css('z-index', 1);

		$('#bg-2').css('opacity', 0);
		$('#bg-2').animate({'opacity': 1}, 1500);
	}

	var one_active = true;
	// imgs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
	// imgs = ['seventeen', 'eighteen', 'nineteen'];

	function bg_change() {       

		if (one_active) {
			var front_bg = 'bg-1';
			var back_bg = 'bg-2';
			var front_menu_bg = 'menu-bg-1';
			var back_menu_bg = 'menu-bg-2';
		} else {
			var front_bg = 'bg-2';
			var back_bg = 'bg-1';
			var front_menu_bg = 'menu-bg-2';
			var back_menu_bg = 'menu-bg-1';
		}

		var curr_bg = document.getElementById(back_bg).className;
		var old_bg = document.getElementById(front_bg).className;

		do {
			var index = Math.floor(Math.random() * imgs.length);
			var new_bg = imgs[index];			
		} while(new_bg == old_bg || new_bg == curr_bg);
		// } while (new_bg == curr_bg);

		$('#' + front_bg).animate({'opacity': 0}, 2000);
		$('#' + back_bg).css('opacity', 1);

		$('#' + front_menu_bg).animate({'opacity': 0}, 2000);
		$('#' + back_menu_bg).css('opacity', 1);

		one_active = !one_active;

		setTimeout(function() {

			$('#' + back_bg).css('z-index', 2);
			$('#' + front_bg).css('z-index', 1);

			$('#' + back_menu_bg).css('z-index', 2);
			$('#' + front_menu_bg).css('z-index', 1);

			if (old_bg != '') {
				$('#' + front_bg).removeClass(old_bg);
				$('#' + front_menu_bg).removeClass(old_bg);
			}
			$('#' + front_bg).addClass(new_bg);
			$('#' + front_menu_bg).addClass(new_bg);
		}, 2000);

	}

	setInterval(function(){
	   	bg_change()
	}, 4000);
});