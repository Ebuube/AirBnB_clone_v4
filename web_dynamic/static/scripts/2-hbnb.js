#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
  $.ajax({
    url: 'http://localhost:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json'
  })

    .done(function (json) {
      console.log(`API status: ${json.status}`);
      if (json.status !== 'OK') {
        if ($('div#api_status').hasClass('available')) {
          $('div#api_status').removeClass('available');
        }
        return;
      }
      if (!($('div#api_status').hasClass('available'))) {
        $('div#api_status').addClass('available');
      }
    })

    .fail(function (xhr, status, errorThrown) {
      console.log('Could not access API');
      console.log(`xhr: ${xhr}\nstatus: ${status}\nerrorThrown: ${errorThrown}`);
    });

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
