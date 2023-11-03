#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
	$('.amenities .popover input').on('change', function () {
		console.log($(this).data('id'));
	});
});
