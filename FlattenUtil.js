// Flatten a ragged array
// var sample = [ [1,2], [[3,[4]], 5], [6,7,8], 9, 10];
// var result = arr.reduce( _toFlat, [] );


var _toFlat = function( previous, current ) { 
	if (!Array.isArray(current)) {
		previous.push(current);
		return previous;
	}
	
	var newArr = current.reduce( _toFlat, [] );
	return previous.concat(newArr);
};

// Array.prototype.reduce() - JavaScript | MDN <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>

// Destructive flattening
function _flattenArray( arr ) { 
	if (!Array.isArray(arr)) {
		return [arr];
	}

	var result = [];
	var elem1 = arr[0];
	if (!Array.isArray(elem1)) {
		result.push(elem1);
		} else {
		result = result.concat( _flattenArray(elem1) );
		}

    if (arr.length > 1){
    	arr.splice(0, 1);
    	result = result.concat( _flattenArray( arr ) );
    }
    
	return result;
}