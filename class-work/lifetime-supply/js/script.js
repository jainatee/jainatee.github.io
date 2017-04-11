
// add an event listener to #click-me
// 2) store inputs as variables using .value
// 3) (max age - age) * drinks per day * 365
// 4) Output answers for the user to see



document.querySelector('#click-me').onclick = function () {
	var age = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favoriteDrink = document.querySelector('#item').value
	var numDrink = document.querySelector('#num-per-day').value;
	age = parseInt(age);
	maxAge = parseInt(maxAge);
	numDrink = parseInt(numDrink);
	var drinksLeft = (maxAge - age) * numDrink * 365
	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML = favoriteDrink;
}

