var globalSum = 0;

var sum = function() {
	var currentSum = 0;
	for(var i = 0; i < arguments.length; i++) {
		currentSum += arguments[i];
	}
	globalSum += currentSum;

	return globalSum;
}