//Scroll Reveal

window.sr = ScrollReveal();
sr.reveal('.newsblock');
sr.reveal('.spotlight-container');

// navigation 

$(window).scroll(function () {
	  var offset = $(window).scrollTop();
	  var windowSize = $(window).width();

	  if (offset > 88 && windowSize > 700) {
	    $('nav').addClass('nav-image-offset');
	    $('.nav-links').addClass('nav-links-offset')
	  } else {
	    $('nav').removeClass('nav-image-offset');
	    $('.nav-links').removeClass('nav-links-offset');
	  }
	})


// Location colors to match background

var locationManhattan = $(".manhattan").css('background-color')
$(".manhattan h3").css('color', locationManhattan);


var locationQueens = $(".queens").css('background-color')
$(".queens h3").css('color', locationQueens);


var locationBrooklyn = $(".brooklyn").css('background-color')
$(".brooklyn h3").css('color', locationBrooklyn);


// Dropdowns on Resources

$(".list").hide();
$('.dropdown').click(function () {
	$(this).find('.list').slideToggle(400);
})


// Filtering by Location

var eventBlock = $('.event-block');
eventBlock.fadeIn(300);

var $grid = $('.container1');
$('.container1').isotope({
  // options
  itemSelector: '.event-block',
  layoutMode: 'fitRows'
});

$('#filters li a').click(function(event) { 
	event.preventDefault();
    var customType = $( this ).data('filter');

$grid.isotope({ filter: '.' + customType});
    
});


//Google Maps - Event PAge

var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.739, lng: -73.989},
          zoom: 10
        });


var locations = [
	{
		 lat: 40.7150265,
		 lng: -73.915169,
		 title: 'Creative Tech Week: Arts Hub'
		},
		{
		  lat: 40.7232814,
		  lng: -74.0021572,
		  title: 'Entrepreneurship Mixer'
		},
		{
		  lat: 40.740231,
		  lng: -74.007294,
		  title: '#WIMinTechNY',
		},
		{
		  lat: 40.6766332,
		  lng: -73.9885689,
		  title: 'Women In Tech Lecture Series',
		},
		{
		  lat: 40.766685,
		  lng: -73.983497,
		  title: 'Own Your Future In Tech',
		},
		{
		  lat: 40.7516776,
		  lng: -73.9817358,
		  title: 'Sex Tech Revolution',
		},
		{
		  lat: 40.698677,
		  lng: -73.985941,
		  title: 'Brooklyn Networking Mixer',
		},
		{
		  lat: 40.6892023,
		  lng: -73.982966,
		  title: 'We Connect Mentor Session',
		},
		{
		  lat: 40.809159,
		  lng: -73.947325,
		  title: 'Womens Business Conference'
		},
		{
		  lat: 40.726920,
		  lng: -74.006926,
		  title: 'Breaking The Glass'
		},
		{
		  lat: 40.771469,
		  lng: -73.989711,
		  title: 'Using Tech To Protect Womens Rights'
		},
		{
		  lat: 40.792100,
		  lng: -73.952383,
		  title: 'State of New York Women'
		},
		{
		  lat: 40.7441582,
		  lng: -73.990485,
		  title: 'Investing in Emerging Tech'
		},
		{
		  lat: 40.7151586,
		  lng: -73.9135651,
		  title: 'Women Who Build'
		}

	    ];

locations.forEach(function (location) {
	var marker = new google.maps.Marker({
	    position: {
	      lat: location.lat,
	      lng: location.lng,
	    },
	    title: location.title,
	    map: map
 	  });
})





