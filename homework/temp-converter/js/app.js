// CELSIUS
// User input - give variable
//1. User inputs temperature - Get Celsius Value on keyup
//2. parseInt(tempinCelsius)
//3. Calculate Celsius to Farenheit
//4. Get output
//5. Write output into Farenheit Box

// FARENHEIT

//1. User inputs temperature - Get Farenheit Value
//2. parseInt(tempinFarenheit)
//3. Calculate Farenheit to Celsius
//4. Output for Celsius
//5. Reset button to zero

// If total is less than 25C - Freezing
// If total is more thn 25C and less than 50C - Cool
// If total is more than 50C and less than 80C - Warm
// If total is more than 80C and less than 95 - Hot
// If total is more than 95C, Burning

//var celsius = $('#celsius').val('celsiusValue')
//console.log(celsiusValue)


$('#celsiusValue').keyup(valueFarenheit);

function valueFarenheit () {
	var giveFarenheit = $('#celsiusValue').val();
	parseInt(giveFarenheit);
	giveFarenheit = Math.round((giveFarenheit * 1.8) + 32);
	$('#farenheitValue').val(giveFarenheit).text(giveFarenheit);
	if (giveFarenheit <= 30) {
		$('body').css('background-image', 'url("img/winter.jpg")');
	} else if (giveFarenheit > 30 && giveFarenheit < 50) {
		$('body').css('background-image', 'url("img/cool.jpg")');
	} else if (giveFarenheit >= 50 && giveFarenheit <= 70) {
		$('body').css('background-image', 'url("img/spring.jpg")');
	} else if (giveFarenheit > 70) {
		$('body').css('background-image', 'url("img/summer.jpg")');
	}
}

$('#farenheitValue').keyup(valueCelsius);

function valueCelsius () {
	var giveCelsius = $('#farenheitValue').val();
	parseInt(giveCelsius);
	giveCelsius = Math.round((giveCelsius - 32) / 1.8);
	$('#celsiusValue').val(giveCelsius).text(giveCelsius);
	if (giveCelsius <= -1) {
		$('body').css('background-image', 'url("img/winter.jpg")');
	} else if (giveCelsius > -1 && giveCelsius < 10) {
		$('body').css('background-image', 'url("img/cool.jpg")');
	} else if (giveCelsius >= 10 && giveCelsius < 21) {
		$('body').css('background-image', 'url("img/spring.jpg")');
	} else if (giveCelsius > 21) {
		$('body').css('background-image', 'url("img/summer.jpg")');
	}
}

var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.739, lng: -73.989},
          zoom: 6
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


