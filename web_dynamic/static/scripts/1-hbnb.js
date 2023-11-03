#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
	let userAmenities = {};
	$('.amenities .popover input').on('change', function () {
		// update h4
		if ($(this).is(':checked')) {
			console.log(`Hey ${$(this).data('name')} was just checked`);
			userAmenities[$(this).data('id')] = $(this).data('name');
		} else {
			console.log(`Hey ${$(this).data('name')} was just removed`);
			delete userAmenities[$(this).data('id')];
		}

		console.log('New list');
		const defaultH4 = '&nbsp;';
		$('.amenities h4').empty();

		for (const [key, name] of Object.entries(userAmenities)) {
			console.log(name);
			let prevList = $('.amenities h4').text().trim();
			if (prevList.length === 0) {
				$('.amenities h4').text(name);
			} else {
				$('.amenities h4').text($('.amenities h4').text() + ', ' + name);
			}
		}
		console.log('End of list');

		if ($('.amenities h4').text().trim().length == 0)
			$('.amenities h4').html(defaultH4);
	});
});
