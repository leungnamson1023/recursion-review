// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arrayVals = [];
  var objArray = [];
  //primitive types
  if (typeof obj === 'boolean' || obj === null || typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length < 1) {
      return '[]';
    } else {
      obj.forEach(function(item) {
        arrayVals.push(stringifyJSON(item)); 
      }); 
      return '[' + arrayVals + ']';
    }
  }
  //objects

  if (obj instanceof Object) {
    //if empty obj
    // keys in obj to string
    var arrOfKeys = Object.keys(obj);
    console.log(arrOfKeys);
    if (arrOfKeys.length === 0 ) {
      return '{}';
    } 

    for (var key in obj) {
    console.log(key);
      if (key === 'string') {
        objArray.push('"' + key + '":' + stringifyJSON(obj[key]));
      } else if (typeof key === 'boolean' || key === null || typeof key === 'number') {
        objArray.push('' + key + ':' + stringifyJSON(obj[key]));
      }

      return '{' + objArray + '}';
      // objArray.push(stringifyJSON(obj[key]));
      // objArray.push(stringifyJSON(key));
    }
  }
  


  // if parameter is array, depending on the value of each element, 
  //run it back into the function and string it. return stringify array after


  // if it is an object, take each key and string it, take each property and string it, return object stringed.
};




