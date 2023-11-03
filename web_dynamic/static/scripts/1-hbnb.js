#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
  const userAmenities = {};
  $('.amenities .popover input').on('change', function () {
    // update h4
    if ($(this).is(':checked')) {
      userAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete userAmenities[$(this).data('id')];
    }

    const defaultH4 = '&nbsp;';
    $('.amenities h4').empty();

    for (const [, name] of Object.entries(userAmenities)) {
      const prevList = $('.amenities h4').text().trim();
      if (prevList.length === 0) {
        $('.amenities h4').text(name);
      } else {
        $('.amenities h4').text($('.amenities h4').text() + ', ' + name);
      }
    }

    if ($('.amenities h4').text().trim().length === 0) { $('.amenities h4').html(defaultH4); }
  });
});
