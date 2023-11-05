#!/usr/bin/node
// Select some Amenities to be comfortable!
$(function () {
  // versatile values
  const choiceAmenities = {};
  const choiceStates = {};
  const choiceCities = {};

  function displayPlaces (places) {
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
  }

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
      displayPlaces(places);
    })

    .fail(function (xhr, status, errorThrown) {
      console.log('Could not display places');
      console.log(`xhr: ${xhr}\nstatus: ${status}\nerrorThrown: ${errorThrown}`);
    });

  // Select amenities
  $('.amenities .popover input').on('change', function () {
    // update h4
    if ($(this).is(':checked')) {
      choiceAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete choiceAmenities[$(this).data('id')];
    }

    const defaultH4 = '&nbsp;';
    $('.amenities h4').empty();

    for (const [, name] of Object.entries(choiceAmenities)) {
      const prevList = $('.amenities h4').text().trim();
      if (prevList.length === 0) {
        $('.amenities h4').text(name);
      } else {
        $('.amenities h4').text($('.amenities h4').text() + ', ' + name);
      }
    }

    if ($('.amenities h4').text().trim().length === 0) { $('.amenities h4').html(defaultH4); }
  });

	// Select States
	$('div.locations div.popover h2 input').on('change', function () {
		console.log(`Hey! Why click on me ${$(this).data('name')}?`); // test
		if ($(this).is(':checked')) {
			choiceStates[$(this).data('id')] = $(this).data('name');
		} else {
			delete choiceStates[$(this).data('id')];
		}

		updateH4('states', choiceStates);
	});

	// Select cities
	$('div.locations div.popover ul li ul li input').on('change', function () {
		console.log(`Hey! Why click on me ${$(this).data('name')}?`); // test
		if ($(this).is(':checked')) {
			choiceCities[$(this).data('id')] = $(this).data('name');
		} else {
			delete choiceCities[$(this).data('id')];
		}

		updateH4('cities', choiceCities);
	});

	// updateH4 tag
	function updateH4(typeData, data) {
		console.log(`typeData: ${typeData}`); // test
		const defaultTypes = ['states', 'cities'];
		if (!(defaultTypes.includes(typeData))) {
			console.log(`Wrong type: ${typeData}`);
			return;
		};

		let stateH4 = $('div.locations h4');
		let spaceHolder = $('<div class="space"></br></div>');
		let spaceSelect = $('div.locations h4 div.space');
		let typeList = $(`<div class="${typeData}"></div>`);
		let typeListSelect = $(`div.locations h4 div.${typeData}`);
		let defaultDiv = '&nbsp;';
		typeListSelect.remove();
		spaceSelect.remove();
		typeList = $(`<div class="${typeData}"></div>`);
		if (typeData === "states") {
			stateH4.prepend(typeList);
			typeList.insertAfter(spaceHolder);
		}
		else if (typeData === "cities") {
			stateH4.append(typeList);
			typeList.insertBefore(spaceHolder);
		}
		console.log(`stateH4: ${JSON.stringify(stateH4)}`); // test
		for (const [, name] of Object.entries(data)) {
			let prevList = typeList.text().trim();
			console.log(`${typeData}List: ${JSON.stringify(typeList)}`); // test
			console.log(`prevList: ${prevList}`); // test
			if (prevList.length === 0) {
				typeList.text(name);
			} else {
				typeList.text(typeList.text() +', ' + name);
			}
		};
		if (typeList.text().trim().length === 0) {
			typeList.html(defaultDiv);
		}
	};

  // Filters Search
  // Display only places with specific Amenities
  $('section.filters button').click(function () {
    console.log('Clicked the \'Search\' button :@: Searching'); // test
    $('div.placesh1 div.no_place_found').remove();
    const noPlaceMsg = $('<div class="no_place_found"></div>');
    // let searchMsg = $('<div>"Searching..."</div');
    noPlaceMsg.append('<div>Searching...</div>');
    $('div.placesh1').append(noPlaceMsg);

    const delayTime = 0.4; // seconds
    setTimeout(() => {
      $('section.places').empty();

      const payload = Object();
      payload.amenities = Object.keys(choiceAmenities);
      payload.states = Object.keys(choiceStates);
      console.log(`Amenities: ${JSON.stringify(choiceAmenities)}`);
      console.log(`States: ${JSON.stringify(choiceStates)}`);
      console.log(`payload: ${JSON.stringify(payload)}`);
      // get specified places
      $.ajax({
        url: 'http://localhost:5001/api/v1/places_search/',
        dataType: 'json',
        type: 'POST',
        data: `${JSON.stringify(payload)}`,
        contentType: 'application/json'
      })
        .done(function (places) {
          console.log(`Got ${places.length} places(s)`);
          noPlaceMsg.empty();
          displayPlaces(places);
          if (places.length === 0) {
            noPlaceMsg.prepend('<div>No place found!</div>');
            noPlaceMsg.append('<div>Remove some search keys.</div>');
          } else {
            noPlaceMsg.remove();
          }
        })
        .fail(function (xhr, status, errorThrown) {
          console.log('Failure to search for places with specificatoins');
        });
    }, delayTime * 1000);
    // alert('Timeout completed');
  });
});
