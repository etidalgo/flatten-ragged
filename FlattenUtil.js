// Flatten a ragged array
// var sample = [ [1,2], [[3,[4]], 5], [6,7,8], 9, 10];
// var result = arr.reduce( _toFlat, [] );

var _toFlat = function( previous, current ) { 
	var nextElement;
	if (Array.isArray(current)) {
		nextElement = current.reduce( _toFlat, [] );
	} else {
		nextElement = current;
	}
	return previous.concat(nextElement);
};

// Array.prototype.reduce() - JavaScript | MDN <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
//Array.prototype.concat() - JavaScript | MDN <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat>
