#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
	$('.amenities .popover input').on('change', function () {
		// update h4
		const defaultH4 = '&nbsp;';
		console.log('New list');
		$('.amenities h4').empty();
		$('.amenities .popover li input:checked').each(function () {
			console.log($(this).data('name'));
			// updated tag
			let prev_list = $('.amenities h4').text();
			prev_list = prev_list.trim();
			if (prev_list.length === 0) {
				$('.amenities h4').text($(this).data('name'));
			}
			else {
				let val = $('.amenities h4').text() + ', ' + $(this).data('name');
				$('.amenities h4').text(val);
			}
		})
		console.log('End of list');

		if ($('.amenities h4').text().trim().length == 0)
			$('.amenities h4').html(defaultH4);
	});
});
