#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
  // Show API status
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

  // Display places
  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    type: 'POST',
    dataType: 'json',
    data: '{}',
    contentType: 'application/json'
  })
    .done(function (places) {
      console.log('Got places');
      for (const place of places) {
        const article = $('<article></article>');

        // Title
        const title = $('<div class="title_box"></div>');
        title.append(`<h2>${place.name}</h2>`);
        title.append(`<div class="price_by_night">${place.price_by_night}</div>`);
        article.append(title);

        // information
        const info = $('<div class="information"></div>');
        info.append(`<div class="max_guest">${place.max_guest} Guest(s)</div>`);
        info.append(`<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`);
        info.append(`<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)`);
        article.append(info);

        // Description
        const desc = $(`<div class="description">${place.description}</div>`);
        article.append(desc);

        // finally
        $('section.places').append(article);
      }
    })

    .fail(function (xhr, status, errorThrown) {
      console.log('Could not display places');
      console.log(`xhr: ${xhr}\nstatus: ${status}\nerrorThrown: ${errorThrown}`);
    });

  // Select amenities
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
