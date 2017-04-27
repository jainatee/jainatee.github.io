var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.739, lng: -73.989},
          zoom: 10
        });


var locations = [
	{
		 lat: 40.7484444,
		 lng: -73.9878441,
		 title: 'Empire State Building'
		},
		{
		  lat: 40.7516248,
		  lng: -73.9776907,
		  title: 'Chrysler Building'
		},
		{
		  lat: 40.7339877,
		  lng: -73.980817,
		  title: 'Flatiron Building',
		},
		{
		  lat: 40.7121162,
		  lng: -74.0128352,
		  title: 'World Trade Center',
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