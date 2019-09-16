var smallpizzabtn = document.getElementById('small-pizza');
var mediumpizzabtn = document.getElementById('medium-pizza');
var largepizzabtn = document.getElementById('large-pizza');

var smallCounter = document.getElementById('counterSmall');
var mediumCounter = document.getElementById('counterMedium');
var largeCounter = document.getElementById('counterLarge');

var resultbtn = document.getElementById('resultbtn');

var sValue = 0;
var mValue = 0;
var lValue = 0;

var prijsSmall = 6.95;
var prijsMedium = 9.50;
var prijsLarge = 12.50;

smallpizzabtn.onclick = function(){
	sValue++;
	smallCounter.innerHTML = sValue;
}
mediumpizzabtn.onclick = function() {
	mValue++;
	mediumCounter.innerHTML = mValue;
}
largepizzabtn.onclick = function() {
	lValue++;
	largeCounter.innerHTML = lValue
}

resultbtn.onclick = function() {
	var result = sValue * prijsSmall + mValue * prijsMedium + lValue * prijsLarge;
	document.getElementById('TotaalResult').innerHTML = result;
	sValue = 0;
	mValue = 0;
	lValue = 0;
	smallCounter.innerHTML = sValue;
	mediumCounter.innerHTML = mValue;
	largeCounter.innerHTML = lValue;

}